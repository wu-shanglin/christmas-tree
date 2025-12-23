
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义源文件和目标文件名的映射
const fileMappings = [
  { source: '20251222-062021(36).jpg', target: '2024_06_1.jpg' },
  { source: '20251222-202406(37).jpg', target: '2024_07_1.jpg' },
  { source: '20251222-202512(38).jpg', target: '2024_07_2.jpg' },
  { source: '20251222-202512(39).jpg', target: '2024_09_1.jpg' },
  { source: '20251222-223225(1).jpg', target: '2024_09_2.jpg' },
  { source: '20251222-223225(2).jpg', target: '2024_09_3.jpg' },
  { source: '20251222-223225(3).jpg', target: '2024_09_4.jpg' },
  { source: '20251222-223225(4).jpg', target: '2024_09_5.jpg' },
  { source: '20251222-223225(5).jpg', target: '2024_09_6.jpg' },
  { source: '20251222-223225(6).jpg', target: '2024_10_1.jpg' },
  { source: '20251222-223225(7).jpg', target: '2024_11_1.jpg' },
  { source: '20251222-223225(8).jpg', target: '2024_12_1.jpg' },
  { source: '20251222-223225(9).jpg', target: '2024_12_2.jpg' },
  { source: '20251222-223225(10).jpg', target: '2024_12_3.jpg' },
  { source: '20251222-223225(11).jpg', target: '2025_01_1.jpg' },
  { source: '20251222-223225(12).jpg', target: '2025_01_2.jpg' },
  { source: '20251222-223225(13).jpg', target: '2025_01_3.jpg' },
  { source: '20251222-223225(14).jpg', target: '2025_01_4.jpg' },
  { source: '20251222-223225(15).jpg', target: '2025_01_5.jpg' },
  { source: '20251222-223225(17).jpg', target: '2025_01_6.jpg' },
  { source: '20251222-223225(19).jpg', target: '2025_01_7.jpg' },
  { source: '20251222-223225(20).jpg', target: '2025_02_1.jpg' },
  { source: '20251222-223225(21).jpg', target: '2025_05_1.jpg' },
  { source: '20251222-223225(22).jpg', target: '2025_06_1.jpg' },
  { source: '20251222-223225(23).jpg', target: '2025_06_2.jpg' },
  { source: '20251222-223225(24).jpg', target: '2025_06_3.jpg' },
  { source: '20251222-224142(26).jpg', target: '2025_09_1.jpg' },
  { source: '20251222-224702(25).jpg', target: '2025_10_1.jpg' },
  { source: '20251222-224702(27).jpg', target: '2025_10_2.jpg' },
  { source: '20251222-224702(28).jpg', target: '2025_11_1.jpg' },
  { source: '20251222-224702(29).jpg', target: '2025_11_2.jpg' },
  { source: '20251222-224702(30).jpg', target: '2025_12_1.jpg' },
  { source: '20251222-224702(31).jpg', target: '2025_12_2.jpg' },
  { source: '20251222-224956(32).jpg', target: '2025_12_3.jpg' },
  { source: '20251222-225026(33).jpg', target: '2025_01_8.jpg' },
  { source: '20251222-235738(34).jpg', target: '2025_01_9.jpg' },
  { source: '20251222-235738(35).jpg', target: '2025_01_10.jpg' },
  { source: '20251222-251221(40).jpg', target: '2025_01_11.jpg' }
];

const photosDir = path.join(__dirname, 'public', 'photos');

// 执行重命名操作
fileMappings.forEach(({ source, target }) => {
  const sourcePath = path.join(photosDir, source);
  const targetPath = path.join(photosDir, target);

  if (fs.existsSync(sourcePath)) {
    fs.renameSync(sourcePath, targetPath);
    console.log(`已重命名: ${source} -> ${target}`);
  } else {
    console.log(`源文件不存在: ${source}`);
  }
});

console.log('照片重命名完成！');
