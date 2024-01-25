import ServiceCard from "../Components/ServiceCard";
import { services } from "../constants/index";

const Services = () => {
  return (
    <section id="services" className="flex  max-container justify-center items-center gap-9 flex-wrap">
      {services.map((service) => (
          <ServiceCard key={service.label}  {...service}/>
      ))}
    </section>
  )
}

export default Services
