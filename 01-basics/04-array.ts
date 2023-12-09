const animes: string[] = [];
animes.push('One Piece');
animes.push('Jujutsu Kaisen');
animes.push('Souso no Frieren');

for (const anime of animes) {
  console.log(anime);
}

const animesRank: Array<number> = [1, 2, 3];
console.log(animesRank);

interface User {
  name: string;
  isVerified: boolean;
}

const allUsers: User[] = [];
allUsers.push({ name: 'Abra', isVerified: true });
allUsers.push({ name: 'Zidan', isVerified: false });

for (const user of allUsers) {
  console.log(user);
}

const MLModels: number[][] = [[255, 255, 255], [], [255, 255, 255]];
console.log(MLModels);

export {};
