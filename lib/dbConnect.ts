import mongoose, { Connection } from 'mongoose';

// Define the type for our cached connection
interface CachedConnection {
  conn: Connection | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend the NodeJS global namespace to include our mongoose property
declare global {
  // eslint-disable-next-line no-var
  var mongoose: CachedConnection | undefined;
}

// Use the global mongoose or initialize a new cached connection
const cached: CachedConnection = global.mongoose || { conn: null, promise: null };

// Store the connection in the global object
if (!global.mongoose) {
  global.mongoose = cached;
}

/**
 * Connect to MongoDB and cache the connection
 * @returns Promise resolving to a MongoDB connection
 */
async function dbConnect(): Promise<Connection> {
  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // Create new connection if no connection promise exists
  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
    };

    // We need to ensure MONGODB_URI exists
    if (!process.env.MONGODB_URI) {
      throw new Error('Please define the MONGODB_URI environment variable');
    }

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts);
  }

  try {
    // Wait for the connection and store it
    const mongooseInstance = await cached.promise;
    cached.conn = mongooseInstance.connection;
  } catch (e) {
    // Reset the promise on error
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;