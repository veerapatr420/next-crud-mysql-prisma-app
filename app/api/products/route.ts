import prisma from "@/lib/prisma";

// ฟังก์ชัน API : POST (Create) เพิ่มข้อมูลลงตาราง product
export async function POST(request: Request) {

  // รับข้อมูล JSON จาก Request
  const body = await request.json();

  // บันทึกข้อมูลลงตาราง product โดยใช้ Prisma
  const product = await prisma.products.create({
    data: {
      name: body.name,
      description: body.description,
      price: body.price,
      quantity: body.quantity,
    },
  });

  return Response.json(product, { status: 201 });
}
//ฟังก์ชัน API : GET (Read) ดึงข้อมูลทั้งหมดจากตาราง product
export async function GET() {
  //ให้prisma ดึงข้อมูลทั้งหมดจากตาราง product มาใส่ตัวแปร products
  const products = await prisma.products.findMany();

  //ส่งผลการทำงานกลับไปยัง client ในรูปแบบ JSON พร้อมกับสถานะ 200 (OK)
  return Response.json(products, { status: 200 });
}