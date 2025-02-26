import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Item from '@/models/Item';

// GET endpoint to fetch all items
export async function GET() {
  try {
    await dbConnect();
    const items = await Item.find({});
    return NextResponse.json(items);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch items';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// POST endpoint to create new item
export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    console.log('Received data:', data);
    
    // Create complete item object with all fields
    const itemData = {
      name: data.name,
      title: data.title,
      url: data.url,
      type: data.type,
      category: data.category,
      technologies: data.technologies || [],
      framework: data.framework || 'Flutter',
      price: typeof data.price === 'number' ? data.price : 0,
      image: data.image,
      description: data.description,
      rating: typeof data.rating === 'number' ? data.rating : 0,
      downloads: typeof data.downloads === 'number' ? data.downloads : 0,
      features: Array.isArray(data.features) ? data.features : [],
      screenshots: Array.isArray(data.screenshots) ? data.screenshots : [],
      longDescription: data.longDescription || '',
      techStack: Array.isArray(data.techStack) ? data.techStack : [],
      version: data.version || '',
      author: data.author || '',
      support: data.support || '',
      fileSize: data.fileSize || '',
      timeToComplete: data.timeToComplete,
      estimatedTime: data.estimatedTime
    };
    
    // Create and save the item
    const newItem = new Item(itemData);
    // await newItem.validate();
    const savedItem = await newItem.save();
    
    // Fetch the complete saved item
    const completeItem = await Item.findById(savedItem._id)
      .lean()
      .exec();
      
    return NextResponse.json(completeItem, { status: 201 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to create item';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}