import Button from "../../components/Button";
import ShoeCard from "../../components/ShoeCard";
import { statistics } from "../../constants";
import { arrowRight } from "../icons";
import { bigShoe1 } from "../images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl-w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className="text-xl font-mono text-red-600">Our Sumer Collection</p>
      <h1 className="mt-10 font-sans text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold"><span className="xl:bg-white  xl:whitespace-nowrap relative z-10 pr-10">The New Arrival
        </span><br/><span className="text-red-600 mt-3 inline-block">Nike</span>Shoes</h1>
        <p className="font-sans text-slate-700 text-lg leading-8 mt-6 mb-14 sm-max-w-sm">Discover styles Nike Arrivals,quality comfort,and innovation for your active life. </p>
        <Button label="Shop now" iconURL={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stat)=>(<div key={stat.label}>
              <p className="text-4xl font-sans font-bold">{stat.value}</p>
              <p className="leading-7 font-serif text-slate-700">{stat.label}</p>

              </div>))
          }
        </div>       
      </div>   
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen">
      <img src={bigShoe1}
      alt="Shoe Collection"
      width={610}
      height={500}
      className="object-contain relative z-10"
      />

      </div>   
    </section>    
  );
};

export default Hero;
