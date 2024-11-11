import "./Disciplina.css"

export default function Disciplina() {
    const codigo = "DCC207";
    const nomeDisplicina = "Desenvolvimento Web Front-End";
  return (
    <div className="disciplina">
      <div>{codigo}</div>
      <div>{nomeDisplicina}</div>
    </div>
  )
}