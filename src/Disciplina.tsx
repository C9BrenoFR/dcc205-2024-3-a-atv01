import "./Disciplina.css"

type DisciplinaProps = {
    codigo: string;
    nomeDisciplina: string;
}

export default function Disciplina(props: DisciplinaProps) {
  return (
    <div className="disciplina">
      <div>{props.codigo}</div>
      <div>{props.nomeDisciplina}</div>
    </div>
  )
}