import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Item from '@/models/Item';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { pathname } = request.nextUrl;
    const id = pathname.split('/').pop(); // Extract the ID from the URL

    if (!id) {
      return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
    }

    const item = await Item.findById(id);
    if (!item) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Error fetching item' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    await dbConnect();
    const { pathname } = request.nextUrl;
    const id = pathname.split('/').pop(); // Extract the ID from the URL
    const body = await request.json();

    if (!id) {
      return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
    }

    const item = await Item.findByIdAndUpdate(id, body, { new: true });

    if (!item) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error('PUT Error:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Error updating item' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await dbConnect();
    const { pathname } = request.nextUrl;
    const id = pathname.split('/').pop(); // Extract the ID from the URL

    if (!id) {
      return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
    }

    const item = await Item.findByIdAndDelete(id);

    if (!item) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('DELETE Error:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Error deleting item' },
      { status: 500 }
    );
  }
}
