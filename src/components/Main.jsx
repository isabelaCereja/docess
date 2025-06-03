const doces = [
  { nome: "Brigadeiro", desc: "Delicioso brigadeiro tradicional.", img: "brigadeiro.jpg" },
  { nome: "Beijinho", desc: "Feito com coco e leite condensado.", img: "beijinho.jpg" },
  { nome: "Cajuzinho", desc: "Doce de amendoim com chocolate.", img: "cajuzinho.jpg" },
  { nome: "Quindim", desc: "Doce de gema com coco e brilho.", img: "quindim.jpg" },
  { nome: "Bolo de Pote", desc: "Bolo no potinho com recheio.", img: "bolo.jpg" },
  { nome: "Pudim", desc: "Pudim lisinho com calda de caramelo.", img: "pudim.jpg" },
  { nome: "Mousse de Maracujá", desc: "Leve e saborosa.", img: "mousse.jpg" },
  { nome: "Trufa", desc: "Chocolate recheado com um delicioso creme de morango.", img: "trufa.jpg" },
  { nome: "Palha Italiana", desc: "Brigadeiro com biscoito.", img: "palha.jpg" },
  { nome: "Rocambole", desc: "Massa fina com recheio doce.", img: "rocambole.jpg" },
  { nome: "Torta de Limão", desc: "Torta com base crocante e mousse de limão.", img: "torta.jpg" },
  { nome: "Bicho de Pé", desc: "Doce rosa feito com Nesquik.", img: "bichodepe.jpg" },
  { nome: "Doce de Leite", desc: "Caseiro, cremoso e doce na medida.", img: "doceleite.jpg" },
  { nome: "Camafeu", desc: "Nozes com leite condensado e cobertura branca.", img: "camafeu.jpg" }
];


export default function Main() {
  return (
    <main className="main">
      <h2>Nossos Doces</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {doces.map((doce, index) => (
          <div className="doce-card" key={index}>
            <img
              src={`/assets/${doce.img}`}  // aqui monta o caminho para pegar a imagem
              alt={doce.nome}
              className="doce-img"
            />
            <h3>{doce.nome}</h3>
            <p>{doce.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

