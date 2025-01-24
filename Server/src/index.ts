import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Server!');
});
app.get('/api/v1/users',(req: Request,res:Response)=>{
  res.send('api v1 - users');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});