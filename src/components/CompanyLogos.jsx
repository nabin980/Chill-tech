import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="mb-6 text-center tagline text-n-1/50">
        Helping businesses create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo,index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem] hover:scale-125 transition ease-in-out delay-80"
            key={index}
          >
           <a href={logo.url}
           target="_blank">
           <img src={logo.companylogo} width={134} height={28} alt={`${logo.title} logo`} />
           </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
