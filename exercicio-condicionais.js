const nomeAluno = "Edmilson"
const nota1 = 9;
const nota2 = 5;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

console.log(`O aluno: ${nomeAluno}. Foi aprovado com a media ${media}`);

if (media < 5) 
{
  console.log("O aluno: foi Reprovado");
}
 else if (media >= 5 && media < 7)
  {
  console.log(" O aluno: ficou em Recuperação");
}
 else  (media >= 7 && media <= 10) 
 {
  console.log("O aluno foi Aprovado");
}