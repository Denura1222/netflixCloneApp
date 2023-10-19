import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import serverAuth from '@/app/libs/serverAuth';

interface IParams {
  movieId: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
    const { movieId } = params;

    const currentUser = await serverAuth();

    const favoriteIds = [...(currentUser.currentUser.favoriteIds || []), movieId];


    const prisma = new PrismaClient();

    const updateFavorites = await prisma.user.update({
      where: {
        id: currentUser.currentUser.id
      },
      data: {
        favoriteIds,
      },
    });

    await prisma.$disconnect();

    return NextResponse.json(updateFavorites);
  } catch (error) {
    console.error('Error updating favoriteIds:', error);
    return NextResponse.error;
  }
}
