import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Página de contato"
        description="O nosso atendimento é 24 horas por dia, 7 dias por semana. Entre em contato conosco a qualquer momento e nós responderemos o mais breve possível."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
