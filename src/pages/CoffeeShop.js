import MenuItemsContainer from "../components/MenuItemsContainer";
import RecipeSection from "../components/RecipeSection";

const CoffeeShop = () => {
  return (
    <div className="w-full relative bg-white h-[4931px] overflow-hidden text-left text-base text-secondary font-value-sans-pro">
      <div className="absolute top-[2894px] left-[0px] bg-floralwhite w-[1921px] h-[673px]" />
      {/* <img
        className="absolute h-[4.6%] w-[18.18%] top-[26.49%] right-[-5.89%] bottom-[68.91%] left-[87.71%] max-w-full overflow-hidden max-h-full object-contain opacity-[0.04]"
        alt=""
        src="/vector-2.svg"
      /> */}
      <img
        className="absolute top-[26.49%] right-[-5.89%] bottom-[68.91%] left-[87.71%] h-[227px] w-[349px]  object-contain max-w-full "
        alt=""
        src="/vector-2.svg"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[980px]"
        alt=""
        src="/background-elements-hero.svg"
      />
      <div className="absolute top-[1226px] left-[0px] bg-white w-[1920px] h-[895px] opacity-[0.1]" />
      <div className="absolute top-[2094px] left-[0px] bg-white w-[1920px] h-[800px] opacity-[0.1]" />
      <div className="absolute top-[27px] left-[277px] w-[1366px] h-8">
        <div className="absolute top-[4px] left-[1319px] leading-[24px] font-medium">
          Sign in
        </div>
        <div className="absolute top-[4px] left-[0px] flex flex-row items-start justify-start gap-[50px]">
          <div className="relative leading-[24px] font-medium">Home</div>
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative leading-[24px] font-medium">Pages</div>
            <img
              className="w-[12.6px] relative h-[7px] object-contain"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative leading-[24px] font-medium">Menu</div>
            <img
              className="w-[12.6px] relative h-[7px] object-contain"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="relative leading-[24px] font-medium">Contact Us</div>
        </div>
        <div className="absolute top-[0px] left-[1020px] w-[146px] h-8 flex flex-row items-center justify-start gap-[30px] text-center text-xs text-white">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/search.svg"
          />
          <div className="w-[33px] relative h-8">
            <img
              className="absolute top-[8px] left-[0px] w-6 h-6"
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className="absolute top-[0px] left-[15px] w-[18px] h-[18px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-secondary" />
              <div className="absolute w-[55.56%] top-[11.11%] left-[22.22%] leading-[16px] font-medium flex items-center justify-center">
                5
              </div>
            </div>
          </div>
          <div className="w-[29px] relative h-[30px]">
            <img
              className="absolute top-[10px] left-[0px] w-5 h-5"
              alt=""
              src="/vuesaxlinearshoppingcart.svg"
            />
            <div className="absolute top-[0px] left-[11px] w-[18px] h-[18px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-secondary" />
              <div className="absolute w-[55.56%] top-[27.78%] left-[22.22%] leading-[10px] font-medium flex items-center justify-center">
                4
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1px] left-[1274px] flex flex-row items-start justify-start gap-[10px]">
          <div className="w-[30px] relative rounded-[50%] bg-secondary h-[30px] z-[0]" />
          <img
            className="w-[18px] absolute !m-[0] top-[6px] left-[6px] h-[18px] z-[1]"
            alt=""
            src="/vuesaxlinearuser.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[104px] left-[0px] max-h-full w-[1920px] opacity-[0.1]"
        alt=""
        src="/vector-4.svg"
      />
      <img
        className="absolute top-[104.5px] left-[150px] w-0 h-[876px] object-contain opacity-[0.1]"
        alt=""
        src="/vector-5.svg"
      />
      <div className="absolute top-[1590px] left-[277px] tracking-[0.01em] leading-[170%] inline-block w-[646px] opacity-[0.6]">
        Unlocklive takes pride in the art of roasting, transforming raw coffee
        beans into a symphony of aromatic notes and rich flavors.
      </div>
      <div className="absolute top-[1838px] left-[277px] tracking-[0.01em] leading-[170%] inline-block w-[667px] opacity-[0.6]">
        Your choice to savor our coffee is an invitation to experience the
        epitome of craftsmanship, flavor, and dedication.
      </div>
      <div className="absolute top-[980px] left-[0px] bg-floralwhite w-[1920px] h-[246px]" />
      <div className="absolute top-[980px] left-[264px] rounded-t-none rounded-b-xl bg-saddlebrown-100 w-[319px] h-[326px]" />
      <div className="absolute top-[1050px] left-[1097px] w-[196px] h-[102px] flex flex-col items-center justify-start gap-[24px] text-center text-5xl font-abril-display">
        <div className="w-[196px] relative tracking-[0.01em] leading-[30px] font-semibold inline-block">
          Our Live Location
        </div>
        <div className="w-[196px] relative text-base leading-[24px] font-value-sans-pro inline-block">
          848 A 28TH ST, Brooklyn New York, UK
        </div>
      </div>
      <div className="absolute top-[1050px] left-[1445px] w-[198px] h-[110px] flex flex-col items-center justify-start gap-[8px] text-right">
        <div className="w-[198px] relative text-5xl tracking-[0.01em] leading-[30px] font-semibold font-abril-display inline-block">
          Book A Table Now
        </div>
        <div className="w-[196px] relative leading-[24px] inline-block">
          +1 318-254-6849
        </div>
        <div className="w-[196px] relative leading-[24px] inline-block">
          +1 452-754-6579
        </div>
      </div>
      <div className="absolute top-[1050px] left-[729px] w-[216px] h-[110px] flex flex-col items-center justify-start gap-[8px]">
        <div className="w-[216px] relative text-5xl tracking-[0.01em] leading-[30px] font-semibold font-abril-display inline-block">
          Our Opening Hours
        </div>
        <div className="w-[216px] relative leading-[24px] inline-block">
          Mon - Sat: 07:00 - 18:00
        </div>
        <div className="w-[216px] relative leading-[24px] inline-block">
          Only Sun: 09:00 - 14:00
        </div>
      </div>
      <div className="absolute top-[1191px] left-[302px] w-[269px] h-[60px] flex flex-row items-center justify-start gap-[24px] text-5xl text-second1 font-abril-display">
        <img
          className="w-[60px] relative h-[60px]"
          alt=""
          src="/group-1000008457.svg"
        />
        <div className="w-[185px] relative tracking-[0.01em] leading-[170%] font-semibold inline-block shrink-0">
          Play Intro Video
        </div>
      </div>
      <img
        className="absolute top-[1006px] left-[309.3px] w-[242.7px] h-[166.5px] "
        alt=""
        src="/group-1000008461.svg"
      />
      <img
        className="absolute top-[1044px] left-[1021px] max-w-full overflow-hidden h-[120px] opacity-[0.1]"
        alt=""
        src="/vector-729.svg"
      />
      <img
        className="absolute top-[1044px] left-[1369px] max-w-full overflow-hidden h-[120px] opacity-[0.1]"
        alt=""
        src="/vector-729.svg"
      />
      <div className="absolute top-[1456px] left-[277px] text-25xl leading-[60px] font-bakilda-histori inline-block w-[698px]">
        Choosing Unlocklive, A Taste of Perfection
      </div>
      <div className="absolute top-[2224px] left-[611px] text-25xl leading-[60px] font-bakilda-histori text-center inline-block w-[698px]">
        Unlocklive Coffee Menu
      </div>
      <div className="absolute top-[1426px] left-[277px] w-[233px] h-4 text-saddlebrown-100 font-h1">
        <div className="absolute top-[0px] left-[60px] tracking-[0.01em] leading-[100%] inline-block w-[173px]">
          Why Choose Us
        </div>
        <img
          className="absolute top-[8px] left-[0px] w-[50px] h-0 object-contain"
          alt=""
          src="/vector-6.svg"
        />
      </div>
      <div className="absolute top-[2194px] left-[813px] w-[293px] h-4 text-center text-saddlebrown-100 font-h1">
        <div className="absolute top-[0px] left-[60px] tracking-[0.01em] leading-[100%] inline-block w-[173px]">
          Coffee Menu
        </div>
        <img
          className="absolute top-[8px] left-[0px] w-[50px] h-0 object-contain"
          alt=""
          src="/vector-6.svg"
        />
        <img
          className="absolute top-[8px] left-[243px] w-[50px] h-0 object-contain"
          alt=""
          src="/vector-7.svg"
        />
      </div>
      <div className="absolute top-[1942px] left-[277px] rounded-xl flex flex-row items-center justify-center py-[18px] px-[30px] text-saddlebrown-100 border-[1.5px] border-solid border-saddlebrown-100">
        <div className="relative leading-[100%] font-medium">
          Explore Our Menus
        </div>
      </div>
      <div className="absolute top-[2742px] left-[879px] rounded-xl flex flex-row items-center justify-center py-[18px] px-[30px] text-saddlebrown-100 border-[1.5px] border-solid border-saddlebrown-100">
        <div className="relative leading-[100%] font-medium">View All Menu</div>
      </div>
      <div className="absolute top-[1694px] left-[calc(50%_-_443px)] flex flex-col items-center justify-center gap-[8px] text-25xl font-bakilda-histori">
        <div className="relative leading-[56px] capitalize">100+</div>
        <div className="w-[188px] relative text-xl leading-[30px] capitalize font-font text-center inline-block">
          Master Chefs
        </div>
      </div>
      <div className="absolute top-[1694px] left-[calc(50%_-_211px)] flex flex-col items-center justify-center gap-[8px] text-25xl font-bakilda-histori">
        <div className="relative leading-[56px] capitalize">30+</div>
        <div className="w-[188px] relative text-xl leading-[30px] capitalize font-font text-center inline-block">
          Achievements
        </div>
      </div>
      <div className="absolute top-[1674px] left-[510px] rounded-3xs box-border w-[202px] h-[134px] opacity-[0.1] border-[1.5px] border-solid border-secondary" />
      <div className="absolute top-[1667.6px] left-[514.5px] rounded-3xs box-border w-[202px] h-[134px] [transform:_rotate(3.69deg)] [transform-origin:0_0] opacity-[0.1] border-[1.5px] border-solid border-secondary" />
      <div className="absolute top-[1674px] left-[742px] rounded-3xs box-border w-[202px] h-[134px] opacity-[0.1] border-[1.5px] border-solid border-secondary" />
      <div className="absolute top-[1499px] left-[1128px] rounded-t-481xl rounded-b-11xl box-border w-[500px] h-[495px] opacity-[0.1] border-[2px] border-solid border-secondary" />
      <img
        className="absolute top-[1446px] left-[1146px] rounded-sm w-[464px] h-[528px] object-cover"
        alt=""
        src="/layer-1-5@2x.png"
      />
      <img
        className="absolute h-[3.09%] w-[12.56%] top-[54.17%] right-[-3.33%] bottom-[42.75%] left-[90.78%] max-w-full overflow-hidden max-h-full object-contain opacity-[0.04]"
        alt=""
        src="/group@2x.png"
      />
      <MenuItemsContainer
        drinkDescriptionId="/group-1000007917.svg"
        drinkName="Double Espresso x2"
      />
      <MenuItemsContainer
        drinkDescriptionId="/group-1000007917.svg"
        drinkName="Salted Caramel Cold Brew"
        propTop="2538px"
        propLeft="277px"
        propBackgroundColor="#270a05"
        propOpacity="0.1"
        propColor="#270a05"
        propWidth="302px"
      />
      <MenuItemsContainer
        drinkDescriptionId="/group-1000007917.svg"
        drinkName="Hazelnut Heaven Latte"
        propTop="2364px"
        propLeft="975px"
        propBackgroundColor="#270a05"
        propOpacity="0.1"
        propColor="#270a05"
        propWidth="302px"
      />
      <MenuItemsContainer
        drinkDescriptionId="/group-1000007917.svg"
        drinkName="Coconut Cream Delight (Summer)"
        propTop="2538px"
        propLeft="975px"
        propBackgroundColor="#270a05"
        propOpacity="0.1"
        propColor="#270a05"
        propWidth="364px"
      />
      <img
        className="absolute top-[7197px] left-[518px] w-[383.8px] h-[311.3px] object-contain opacity-[0.15]"
        alt=""
        src="/group-1000008482@2x.png"
      />
      <div className="absolute top-[521px] left-[277px] tracking-[0.01em] leading-[170%] whitespace-pre-wrap inline-block w-[668px] opacity-[0.6]">
        Unlocklive embodies our commitment to transforming the simple act of
        sipping coffee into a refined and memorable journey. At Epicurean, we
        take pride in curating an exceptional coffee experience that transcends
        the ordinary.
      </div>
      <div className="absolute top-[265px] left-[277px] tracking-[0.01em] leading-[26px] font-semibold font-h1 inline-block w-[223px]">
        WELCOME TO OUR
      </div>
      <div className="absolute top-[303px] left-[277px] text-[110px] tracking-[0.01em] leading-[124px] font-bakilda-histori">
        Unlocklive
      </div>
      <div className="absolute top-[447px] left-[277px] text-25xl leading-[60px] font-bakilda-histori inline-block w-[676px]">
        Elevating Your Coffee Experience
      </div>
      <div className="absolute top-[652px] left-[277px] rounded-xl bg-saddlebrown-100 flex flex-row items-center justify-center py-[18px] px-[30px] text-white">
        <div className="relative leading-[100%] font-medium">
          EXPLORE OUR MENU
        </div>
      </div>
      <div className="absolute top-[649px] left-[532px] w-[307px] h-[57px] text-5xl font-abril-display">
        <img
          className="absolute top-[1px] left-[0px] rounded-[50%] w-[54px] h-[54px] object-cover"
          alt=""
          src="/ellipse-1551@2x.png"
        />
        <img
          className="absolute top-[2px] left-[42px] rounded-[50%] w-[52px] h-[52px] object-cover"
          alt=""
          src="/ellipse-1549@2x.png"
        />
        <img
          className="absolute top-[1px] left-[81px] rounded-[50%] w-[54px] h-[54px] object-cover"
          alt=""
          src="/ellipse-1550@2x.png"
        />
        <div className="absolute top-[0px] left-[159px] w-[148px] flex flex-col items-start justify-start">
          <div className="w-[85px] relative tracking-[0.01em] leading-[38px] font-semibold inline-block h-[33px] shrink-0">
            1200+
          </div>
          <div className="w-[148px] relative text-sm tracking-[0.01em] leading-[24px] font-value-sans-pro inline-block opacity-[0.6]">
            Tasty Variant Coffee
          </div>
        </div>
      </div>
      <div className="absolute top-[768px] left-[277px] flex flex-row items-center justify-start p-2 gap-[10px]">
        <img className="w-3 relative h-3" alt="" src="/dot-indictaor--1.svg" />
        <img className="w-3 relative h-3" alt="" src="/dot-indictaor--1.svg" />
        <div className="w-3 relative rounded-[50%] bg-gray-200 h-3" />
        <img className="w-4 relative h-4" alt="" src="/dot-indictaor--4.svg" />
        <img className="w-3 relative h-3" alt="" src="/dot-indictaor--1.svg" />
      </div>
      <div className="absolute top-[1674px] left-[277px] w-[203px] h-[134px] text-25xl font-bakilda-histori">
        <div className="absolute h-[70.15%] w-[92.61%] top-[14.93%] right-[3.45%] bottom-[14.93%] left-[3.94%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-center justify-center gap-[8px]">
            <div className="relative leading-[56px] capitalize">20+</div>
            <div className="w-[188px] relative text-xl leading-[30px] capitalize font-font text-center inline-block">
              Years Experience
            </div>
          </div>
        </div>
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border opacity-[0.1] border-[1.5px] border-solid border-secondary" />
      </div>
      <div className="absolute top-[7124px] left-[0px] bg-white w-[1920px] h-[876px] opacity-[0.1]" />
      <div className="absolute top-[7244px] left-[626px] w-[668px] h-[90px] flex flex-col items-center justify-end gap-[14px] text-center text-saddlebrown-100 font-h1">
        <div className="w-[242px] relative h-4">
          <div className="absolute top-[0px] left-[64px] tracking-[0.01em] leading-[100%] inline-block w-[114px]">{`Blog & News`}</div>
          <img
            className="absolute top-[8px] left-[0px] w-[50px] h-0 object-contain"
            alt=""
            src="/vector-6.svg"
          />
          <img
            className="absolute top-[8px] left-[242px] w-[50px] h-0 object-contain"
            alt=""
            src="/vector-7.svg"
          />
        </div>
        <div className="w-[668px] relative text-25xl leading-[60px] font-bakilda-histori text-secondary inline-block">
          Epicurean, From Beans to Blogs
        </div>
      </div>
      <div className="absolute top-[7414px] left-[277px] w-[435px] h-96 text-sm">
        <img
          className="absolute top-[0px] left-[0px] rounded-sm w-[435px] h-[250px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-black w-[435px] h-[250px] opacity-[0.2]" />
        <div className="absolute top-[22px] left-[24px] rounded-6xs bg-white w-[121px] h-11 opacity-[0.3]" />
        <div className="absolute top-[312px] left-[0px] text-5xl leading-[36px] font-font inline-block w-[435px]">{`Brews & News, Stay Caffeinated With Our Epicurean`}</div>
        <div className="absolute top-[32px] left-[44px] tracking-[0.01em] leading-[24px] font-medium text-white inline-block w-[81px] opacity-[0.7]">
          New Coming
        </div>
        <div className="absolute top-[264px] left-[0px] w-[433px] h-[25px]">
          <div className="absolute top-[1px] left-[36px] leading-[24px] inline-block w-[120px] opacity-[0.7]">
            Admin Name
          </div>
          <div className="absolute top-[0px] left-[326px] leading-[24px] inline-block w-[107px] opacity-[0.7]">
            February 6, 2024
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 opacity-[0.7]"
            alt=""
            src="/vuesaxlinearprofilecircle.svg"
          />
        </div>
      </div>
      <div className="absolute top-[7414px] left-[743px] w-[435px] h-96 text-sm">
        <img
          className="absolute top-[0px] left-[0px] rounded-sm w-[435px] h-[250px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-black w-[435px] h-[250px] opacity-[0.7]" />
        <div className="absolute top-[22px] left-[24px] rounded-6xs bg-second w-[143px] h-11 opacity-[0.3]" />
        <div className="absolute top-[312px] left-[0px] text-5xl leading-[36px] font-font inline-block w-[435px]">
          Roast Revelations, Unveiling Epicurean's Secrets
        </div>
        <div className="absolute top-[32px] left-[44px] tracking-[0.01em] leading-[24px] font-medium text-second inline-block w-[103px]">
          Trending Coffee
        </div>
        <div className="absolute top-[264px] left-[0px] w-[435px] h-[25px]">
          <div className="absolute top-[1px] left-[36px] leading-[24px] inline-block w-[120px] opacity-[0.7]">
            Admin Name
          </div>
          <div className="absolute top-[0px] left-[326px] leading-[24px] inline-block w-[109px] opacity-[0.7]">
            February 6, 2024
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 opacity-[0.7]"
            alt=""
            src="/vuesaxlinearprofilecircle.svg"
          />
        </div>
      </div>
      {/* <div className="absolute top-[7414px] left-[1208px] w-[435px] h-96 text-sm">
        <img
          className="absolute top-[0px] left-[0px] rounded-sm w-[435px] h-[250px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-black w-[435px] h-[250px] opacity-[0.2]" />
        <div className="absolute top-[22px] left-[24px] rounded-6xs bg-white w-[121px] h-11 opacity-[0.3]" />
        <div className="absolute top-[312px] left-[0px] text-5xl leading-[36px] font-font inline-block w-[435px]">
          Brew Master's Notes, Insights And Their Inspirations
        </div>
        <div className="absolute top-[32px] left-[44px] tracking-[0.01em] leading-[24px] font-medium text-white inline-block w-[81px] opacity-[0.7]">
          New Coming
        </div>
        <div className="absolute top-[264px] left-[0px] w-[435px] h-[25px]">
          <div className="absolute top-[1px] left-[36px] leading-[24px] inline-block w-[120px] opacity-[0.7]">
            Admin Name
          </div>
          <div className="absolute top-[0px] left-[327px] leading-[24px] inline-block w-[108px] opacity-[0.7]">
            February 6, 2024
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 opacity-[0.7]"
            alt=""
            src="/vuesaxlinearprofilecircle.svg"
          />
        </div>
      </div> */}
      <div className="absolute top-[7858px] left-[881px] rounded-xl flex flex-row items-center justify-center py-[18px] px-[30px] text-saddlebrown-100 border-[1.5px] border-solid border-saddlebrown-100">
        <div className="relative leading-[100%] font-medium">View All News</div>
      </div>
      <div className="absolute top-[4821px] left-[0px] w-[1920px] h-[3957px] text-white">
        <div className="absolute top-[0px] left-[0px] w-[1920px] h-[3957px] flex flex-col items-center justify-start">
          <img
            className="w-[1920px] relative h-[110px] object-cover"
            alt=""
            src="/background@2x.png"
          />
          <div className="w-[1920px] relative bg-secondary h-[110px] opacity-[0.24] mix-blend-color mt-[-110px]" />
          <img
            className="w-[1920px] relative h-[587px] object-cover mt-[-110px]"
            alt=""
            src="/background@2x.png"
          />
          <div className="w-[1920px] relative bg-secondary h-[110px] opacity-[0.24] mix-blend-color mt-[-110px]" />
        </div>
        <div className="absolute top-[3450px] left-[277px] w-[91px] h-[218px]">
          <div className="absolute top-[calc(50%_-_109px)] left-[0%] text-5xl tracking-[0.01em] leading-[30px] font-font">
            Product
          </div>
          <div className="absolute top-[calc(50%_-_67px)] left-[0%] opacity-[0.75]">{`Breakfast `}</div>
          <div className="absolute top-[calc(50%_-_35px)] left-[0%] opacity-[0.75]">
            Lunch
          </div>
          <div className="absolute top-[calc(50%_-_3px)] left-[0%] opacity-[0.75]">
            Desserts
          </div>
          <div className="absolute top-[calc(50%_+_29px)] left-[0%] opacity-[0.75]">
            Dinner
          </div>
          <div className="absolute top-[calc(50%_+_61px)] left-[0%] opacity-[0.75]">
            Book a table
          </div>
          <div className="absolute top-[calc(50%_+_93px)] left-[0%] opacity-[0.75]">
            Our Chefs
          </div>
        </div>
        <div className="absolute top-[3450px] left-[560px] w-[123px] h-[122px]">
          <div className="absolute top-[calc(50%_-_61px)] left-[0%] text-5xl tracking-[0.01em] leading-[30px] font-font">
            Information
          </div>
          <div className="absolute top-[calc(50%_-_19px)] left-[0%] opacity-[0.75]">
            FAQ
          </div>
          <div className="absolute top-[calc(50%_+_13px)] left-[0%] opacity-[0.75]">
            Blog
          </div>
          <div className="absolute top-[calc(50%_+_45px)] left-[0%] opacity-[0.75]">
            Support
          </div>
        </div>
        <div className="absolute top-[3451px] left-[841px] w-[110px] h-[153px] flex flex-col items-start justify-start gap-[12px]">
          <div className="w-[110px] relative text-5xl tracking-[0.01em] leading-[30px] font-font inline-block h-7 shrink-0">
            Company
          </div>
          <div className="w-16 relative inline-block h-5 shrink-0 opacity-[0.75]">
            About us
          </div>
          <div className="w-[77px] relative inline-block h-5 shrink-0 opacity-[0.75]">
            Our Menu
          </div>
          <div className="w-[77px] relative inline-block h-5 shrink-0 opacity-[0.75]">
            Contact us
          </div>
          <div className="relative opacity-[0.75]">Epicurean</div>
        </div>
        <div className="absolute h-[0.03%] w-[71.15%] top-[97.22%] right-[14.43%] bottom-[2.75%] left-[14.43%] bg-white opacity-[0.2]" />
        <div className="absolute top-[3894px] left-[838px] w-[244px] h-[18px] flex flex-row items-center justify-start gap-[45px]">
          <div className="w-[43px] relative inline-block h-[18px] shrink-0">
            Terms
          </div>
          <div className="w-[52px] relative inline-block h-[18px] shrink-0">
            Privacy
          </div>
          <div className="w-[59px] relative inline-block h-[18px] shrink-0">
            Cookies
          </div>
        </div>
        <div className="absolute top-[47px] left-[838px] w-[244px] h-[18px] flex flex-row items-center justify-start gap-[45px]">
          <div className="w-[43px] relative inline-block h-[18px] shrink-0">
            Terms
          </div>
          <div className="w-[52px] relative inline-block h-[18px] shrink-0">
            Privacy
          </div>
          <div className="w-[59px] relative inline-block h-[18px] shrink-0">
            Cookies
          </div>
        </div>
        <div className="absolute top-[3885px] left-[1508px] w-[135px] h-[35px] flex flex-row items-center justify-start gap-[15px]">
          <img
            className="w-[35px] relative h-[35px]"
            alt=""
            src="/linkedin.svg"
          />
          <img
            className="w-[35px] relative h-[35px]"
            alt=""
            src="/facebook.svg"
          />
          <img
            className="w-[35px] relative h-[35px]"
            alt=""
            src="/twitter.svg"
          />
        </div>
        <div className="absolute top-[38px] left-[1508px] w-[135px] h-[35px] flex flex-row items-center justify-start gap-[15px]">
          <img
            className="w-[35px] relative h-[35px]"
            alt=""
            src="/linkedin.svg"
          />
          <img
            className="w-[35px] relative h-[35px]"
            alt=""
            src="/facebook.svg"
          />
          <img
            className="w-[35px] relative h-[35px]"
            alt=""
            src="/twitter.svg"
          />
        </div>
        <img
          className="absolute h-[1.23%] w-[10.91%] top-[98%] right-[74.66%] bottom-[0.77%] left-[14.43%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/logo.svg"
        />
        {/* <div className="absolute h-[8.52%] w-[29.84%] top-[87.19%] right-[14.43%] bottom-[4.3%] left-[55.73%] rounded-xl bg-burlywood mix-blend-normal">
          <img
            className="absolute h-[58.46%] w-[90.58%] top-[8.9%] right-[4.71%] bottom-[32.64%] left-[4.71%] rounded-xl max-w-full overflow-hidden max-h-full object-cover mix-blend-normal"
            alt=""
            src="/rectangle-11266@2x.png"
          />
          <div className="absolute h-[58.46%] w-[90.58%] top-[8.9%] right-[4.71%] bottom-[32.64%] left-[4.71%] rounded-xl bg-black1 opacity-[0.5] mix-blend-normal" />
          <div className="absolute top-[60px] left-[50px] w-[307px] h-[137px] text-5xl font-font">
            <div className="absolute h-[20.44%] w-[36.48%] top-[0%] left-[0%] tracking-[0.01em] leading-[30px] inline-block">
              Subscribe
            </div>
            <div className="absolute top-[43px] left-[0px] text-25xl leading-[60px] font-bakilda-histori">
              Our News letter
            </div>
            <div className="absolute top-[113px] left-[0px] text-base leading-[24px] font-value-sans-pro">
              To Get Regular Update
            </div>
          </div>
          <div className="absolute h-[14.84%] w-[56.54%] top-[76.26%] right-[38.74%] bottom-[8.9%] left-[4.71%] rounded-md bg-white box-border flex flex-col items-start justify-center py-0 px-[22.99951171875px] text-secondary border-[1.5px] border-solid border-lavender">
            <div className="relative leading-[24px] opacity-[0.2]">
              Enter your gmail
            </div>
          </div>
          <div className="absolute top-[257px] left-[381px] flex flex-col items-start justify-start gap-[10px]">
            <img
              className="w-[165px] relative rounded-md h-[50px] z-[0]"
              alt=""
              src="/fill.svg"
            />
            <div className="w-[71px] absolute !m-[0] top-[13px] left-[47px] leading-[24px] font-medium inline-block z-[1]">
              Subscribe
            </div>
          </div>
        </div> */}
      </div>
      <img
        className="absolute h-[2.42%] w-full top-[162.24%] right-[0%] bottom-[-64.65%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/feature-partners.svg"
      />
      <div className="absolute top-[2894px] left-[0px] w-[1920px] h-[672px] hidden text-white">
        <div className="absolute top-[0px] left-[0px] bg-floralwhite w-[1920px] h-[672px]" />
        <div className="absolute top-[0px] left-[0px] w-[1920px] h-[672px]">
          <img
            className="absolute top-[401.8px] left-[553px] w-[63.1px] h-[70.7px] overflow-hidden object-contain opacity-[0.1]"
            alt=""
            src="/cupcake-background@2x.png"
          />
          <img
            className="absolute h-[23.51%] w-[10.46%] top-[83.18%] right-[64.83%] bottom-[-6.7%] left-[24.71%] max-w-full overflow-hidden max-h-full opacity-[0.05]"
            alt=""
            src="/group.svg"
          />
          <div className="absolute top-[100px] left-[1677px] rounded-9xl w-[375px] flex flex-col items-center justify-end bg-[url('/public/images@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="w-[375px] relative rounded-9xl bg-black h-[471.5px] opacity-[0.15]" />
          </div>
          <div className="absolute top-[100px] left-[1270px] w-[375px] h-[471.5px]">
            <div className="absolute top-[0px] left-[0px] rounded-9xl w-[375px] h-[471.5px] flex flex-col items-center justify-start py-[471.5198974609375px] px-0 box-border bg-[url('/public/images1@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="w-[375px] relative rounded-9xl bg-black box-border h-[471.5px] opacity-[0.4] border-[8px] border-solid border-linear" />
              <div className="w-[375px] relative rounded-9xl [background:linear-gradient(180deg,_#101113_39.94%,_rgba(16,_17,_19,_0))] box-border h-[471.5px] opacity-[0.65] mt-[-471px] border-[8px] border-solid border-linear" />
            </div>
            <div className="absolute top-[275px] left-[24px] tracking-[0.01em] leading-[26px] inline-block w-[313px] h-[77px]">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li className="mb-0">{`Thinly sliced meat `}</li>
                <li className="mb-0">Pita bread or wraps</li>
                <li>Toppings: tomatoes, tahini sauce, etc.</li>
              </ul>
            </div>
          </div>
          <div className="absolute top-[100px] left-[863px] rounded-9xl w-[375px] flex flex-col items-center justify-end bg-[url('/public/images2@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="w-[375px] relative rounded-9xl bg-black h-[471.5px] opacity-[0.15]" />
          </div>
        </div>
        <img
          className="absolute top-[483px] left-[272px] w-[110px] h-10"
          alt=""
          src="/carousel.svg"
        />
        <div className="absolute top-[100px] left-[277px] w-[552px] h-[343px] flex flex-col items-start justify-start py-0 px-[0.005859375px] box-border gap-[15px] text-saddlebrown-100 font-h1">
          <div className="w-[186px] relative h-4">
            <div className="absolute top-[0px] left-[60px] tracking-[0.01em] leading-[100%] inline-block w-[126px]">
              New Recipes
            </div>
            <img
              className="absolute top-[8px] left-[0px] w-[50px] h-0 object-contain"
              alt=""
              src="/vector-7.svg"
            />
          </div>
          <div className="w-[552px] relative text-25xl leading-[60px] font-bakilda-histori text-secondary inline-block">
            Taste Our New Recipe
          </div>
          <div className="w-[475px] h-[236px] flex flex-col items-start justify-start gap-[20px] text-paragraph font-value-sans-pro">
            <div className="w-[475px] relative tracking-[0.01em] leading-[24px] inline-block">{`Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. `}</div>
            <div className="w-[468px] relative tracking-[0.01em] leading-[24px] inline-block">
              <p className="m-0">{`There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look `}</p>
              <p className="m-0">slightly believable.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3761px] left-[1306px] leading-[100%] font-medium text-white">
        Read More
      </div>
      <div className="absolute top-[3567px] left-[0px] bg-white w-[1920px] h-[1254px] flex flex-col items-center justify-center text-center text-saddlebrown-100 font-h1">
        <div className="flex flex-col items-center justify-start gap-[60px]">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="flex flex-col items-center justify-start gap-[12px]">
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <div className="relative tracking-[0.05em] leading-[24px] uppercase">
                  Showcase
                </div>
                <div className="w-[125px] relative box-border h-px border-t-[1px] border-solid border-saddlebrown-200" />
              </div>
              <div className="relative text-25xl leading-[60px] capitalize font-bakilda-histori text-secondary">
                Our Chefs New Creations
              </div>
            </div>
            <div className="w-[674px] relative text-[18px] leading-[32px] font-value-sans-pro text-gray-300 inline-block">
              Behold the extraordinary creations born from the synergy of our
              users' ingenuity and the transformative power of AI, a testament
              to boundless innovation.
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[48px] text-3xl text-gray-100 font-value-sans-pro">
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <div className="rounded-31xl bg-saddlebrown-300 flex flex-row items-center justify-center py-3 px-6 text-saddlebrown-100 border-[1px] border-solid border-saddlebrown-100">
                <div className="relative leading-[30px]">All</div>
              </div>
              <div className="rounded-31xl flex flex-row items-center justify-center py-3 px-6">
                <div className="relative leading-[30px]">Burger</div>
              </div>
              <div className="rounded-31xl flex flex-row items-center justify-center py-3 px-6">
                <div className="relative leading-[30px]">Drinks</div>
              </div>
              <div className="rounded-31xl flex flex-row items-center justify-center py-3 px-6">
                <div className="relative leading-[30px]">Pizza</div>
              </div>
              <div className="rounded-31xl flex flex-row items-center justify-center py-3 px-6">
                <div className="relative leading-[30px]">Dinner</div>
              </div>
              <div className="rounded-31xl flex flex-row items-center justify-center py-3 px-6">
                <div className="relative leading-[30px]">Lunch</div>
              </div>
              <div className="rounded-31xl flex flex-row items-center justify-center py-3 px-6">
                <div className="relative leading-[30px]">Cookies</div>
              </div>
              <div className="rounded-31xl flex flex-row items-center justify-center py-3 px-6">
                <div className="relative leading-[30px]">Bakery</div>
              </div>
            </div>
            <div className="w-[1320px] relative h-[720px]">
              <img
                className="absolute top-[372px] left-[0px] rounded-3xl w-[312px] h-[348px] object-cover"
                alt=""
                src="/milkshake.png"
              />
              <img
                className="absolute top-[372px] left-[336px] rounded-3xl w-[536px] h-[348px] object-cover"
                alt=""
                src="/cake.png"
              />
              <img
                className="absolute top-[372px] left-[896px] rounded-3xl w-[424px] h-[348px] object-cover"
                alt=""
                src="/donut.png"
              />
              <img
                className="absolute top-[0px] left-[0px] rounded-3xl w-[424px] h-[348px] object-cover"
                alt=""
                src="/cat.png"
              />
              <img
                className="absolute top-[0px] left-[448px] rounded-3xl w-[872px] h-[348px] object-cover"
                alt=""
                src="/blackcoffee.png"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[4851px] left-[300px] w-[202.5px] h-[38.3px] "
        alt=""
        src="/group-1000008504-1.svg"
      />
      <img
        className="absolute top-[27px] left-[859px] w-[202.5px] h-[38.3px]"
        alt=""
        src="/group-1000008504.svg"
      />
      <div className="absolute top-[2123px] left-[1575px] w-[100px] h-[100px] overflow-hidden" />
      <RecipeSection />

      <img
        className="absolute top-[143px] left-[1033px] w-[754px] h-[630px] object-cover"
        alt=""
        src="/layer-1-1@2x.png"
      />
    </div>
  );
};

export default CoffeeShop;
