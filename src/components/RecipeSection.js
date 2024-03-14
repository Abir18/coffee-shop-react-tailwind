const RecipeSection = () => {
  return (
    <div className="absolute top-[2994px] left-[277px] w-[1780px] h-[471.5px] text-left text-base text-white font-value-sans-pro">
      <div className="absolute top-[0px] left-[1405px] rounded-9xl w-[375px] flex flex-col items-center justify-end bg-[url('/public/images3@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="w-[375px] relative rounded-9xl bg-black h-[471.5px] opacity-[0.15]" />
      </div>
      <div className="absolute top-[0px] left-[998px] rounded-9xl w-[375px] h-[471.5px] bg-[url('/public/images4@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute top-[5px] left-[0px] rounded-9xl bg-black box-border w-[375px] h-[471.5px] opacity-[0.65] border-[8px] border-solid border-linear" />
        {/* <div className="absolute top-[471.5px] left-[0px] rounded-9xl [background:linear-gradient(180deg,_#101113_39.94%,_rgba(16,_17,_19,_0))] box-border w-[375px] h-[471.5px] opacity-[0.65] border-[8px] border-solid border-linear" /> */}
        <div className="absolute top-[339px] left-[24px] tracking-[0.01em] leading-[26px] inline-block w-[313px] h-[73px]">
          <p className="m-0">&nbsp;</p>
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">Pita bread or wraps</li>
            <li>Toppings: tomatoes, tahini sauce, etc.</li>
          </ul>
        </div>
      </div>
      <div className="absolute top-[0px] left-[591px] rounded-9xl w-[375px] flex flex-col items-center justify-end bg-[url('/public/images5@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="w-[375px] relative rounded-9xl bg-black h-[471.5px] opacity-[0.15]" />
      </div>
      <img
        className="absolute top-[383px] left-[0px] w-[110px] h-10"
        alt=""
        src="/carousel.svg"
      />
      <div className="absolute top-[0px] left-[5px] w-[552px] h-[343px] text-saddlebrown-100 font-h1">
        <div className="absolute top-[0px] left-[0px] w-[186px] h-4">
          <div className="absolute top-[0px] left-[60px] tracking-[0.01em] leading-[100%] inline-block w-[126px]">
            New Recipes
          </div>
          <img
            className="absolute top-[8px] left-[0px] w-[50px] h-0 object-contain"
            alt=""
            src="/vector-6.svg"
          />
        </div>
        <div className="absolute top-[107px] left-[0px] w-[475px] h-[236px] flex flex-col items-start justify-start gap-[20px] text-paragraph font-value-sans-pro">
          <div className="w-[475px] relative tracking-[0.01em] leading-[24px] inline-block">{`Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. `}</div>
          <div className="w-[468px] relative tracking-[0.01em] leading-[24px] inline-block">
            <p className="m-0">{`There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look `}</p>
            <p className="m-0">slightly believable.</p>
          </div>
        </div>
        <div className="absolute top-[28px] left-[0px] text-25xl leading-[60px] font-bakilda-histori text-secondary inline-block w-[552px]">
          Taste Our New Recipe
        </div>
      </div>
    </div>
  );
};

export default RecipeSection;
