import "./Disciplina.css"

type DisciplinaProps = {
    codigo: string;
    nomeDisciplina: string;
}

export default function Disciplina({codigo, nomeDisciplina}: DisciplinaProps) {
  return (
    <div className="disciplina">
      <div>{codigo}</div>
      <div>{nomeDisciplina}</div>
    </div>
  )
}