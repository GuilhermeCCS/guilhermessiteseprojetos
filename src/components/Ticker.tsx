const Ticker = () => {
  const text = "GUILHERME S SITES E PROJETOS • SOLUÇÕES DE TI PARA O SEU NEGÓCIO • ";
  const repeatedText = text.repeat(10);

  return (
    <div className="bg-primary py-6 overflow-hidden">
      <div className="animate-ticker whitespace-nowrap">
        <span className="text-primary-foreground font-sans font-bold text-base md:text-lg tracking-widest uppercase">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default Ticker;
