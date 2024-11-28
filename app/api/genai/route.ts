export async function POST(req: Request, res: Response) {
  const reqBody = await req.json();
  console.log(reqBody);
  const prompt = reqBody.data.prompt;
}
