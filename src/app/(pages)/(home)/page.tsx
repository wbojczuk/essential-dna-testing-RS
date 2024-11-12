import Come from "@/app/(mainsite)/components/homepage/Come/Come";
import FindOut from "@/app/(mainsite)/components/homepage/FindOut/FindOut";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Proven from "@/app/(mainsite)/components/homepage/Proven/Proven";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Services from "@/app/(mainsite)/components/homepage/Services/Services";
import Today from "@/app/(mainsite)/components/homepage/Today/Today";


export default function Home() {
  const myServices: servicesModuleType = {
    services: [
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h2v2c0 1.44.68 2.61 1.88 3.78c.86.83 2.01 1.63 3.21 2.42l-1.83 1.19C8.27 10.72 7.31 10 6.5 9.21C5.07 7.82 4 6.1 4 4zm14 0h2v2c0 2.1-1.07 3.82-2.5 5.21c-1.41 1.38-3.21 2.52-4.96 3.63c-1.75 1.12-3.45 2.21-4.66 3.38C6.68 17.39 6 18.56 6 20v2H4v-2c0-2.1 1.07-3.82 2.5-5.21c1.41-1.38 3.21-2.52 4.96-3.63c1.75-1.12 3.45-2.21 4.66-3.38C17.32 6.61 18 5.44 18 4zm-3.26 10.61c.99.67 1.95 1.39 2.76 2.18C18.93 16.18 20 17.9 20 20v2h-2v-2c0-1.44-.68-2.61-1.88-3.78c-.86-.83-2.01-1.63-3.21-2.42zM7 3h10v1l-.06.5H7.06L7 4zm.68 3h8.64c-.24.34-.52.69-.9 1.06l-.51.44H9.07l-.49-.44c-.38-.37-.66-.72-.9-1.06m1.41 10.5h5.84l.49.44c.38.37.66.72.9 1.06H7.68c.24-.34.52-.69.9-1.06zm-2.03 3h9.88l.06.5v1H7v-1z"></path></svg>,
        title: "Paternity Testing",
        price: "$349 - $499",
        description: "Essential DNA Testing offers professional and confidential mobile paternity testing services, bringing reliable, accurate results to you in the comfort of your own space. Our team ensures a smooth, respectful process for confirming biological relationships with convenience and care."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h2v2c0 1.44.68 2.61 1.88 3.78c.86.83 2.01 1.63 3.21 2.42l-1.83 1.19C8.27 10.72 7.31 10 6.5 9.21C5.07 7.82 4 6.1 4 4zm14 0h2v2c0 2.1-1.07 3.82-2.5 5.21c-1.41 1.38-3.21 2.52-4.96 3.63c-1.75 1.12-3.45 2.21-4.66 3.38C6.68 17.39 6 18.56 6 20v2H4v-2c0-2.1 1.07-3.82 2.5-5.21c1.41-1.38 3.21-2.52 4.96-3.63c1.75-1.12 3.45-2.21 4.66-3.38C17.32 6.61 18 5.44 18 4zm-3.26 10.61c.99.67 1.95 1.39 2.76 2.18C18.93 16.18 20 17.9 20 20v2h-2v-2c0-1.44-.68-2.61-1.88-3.78c-.86-.83-2.01-1.63-3.21-2.42zM7 3h10v1l-.06.5H7.06L7 4zm.68 3h8.64c-.24.34-.52.69-.9 1.06l-.51.44H9.07l-.49-.44c-.38-.37-.66-.72-.9-1.06m1.41 10.5h5.84l.49.44c.38.37.66.72.9 1.06H7.68c.24-.34.52-.69.9-1.06zm-2.03 3h9.88l.06.5v1H7v-1z"></path></svg>,
        title: "Sibling DNA Testing",
        price: "$399 - $599",
        description: "Sibling DNA Testing helps determine if two individuals share one or both parents, providing clear answers about family relationships. This convenient service is discreet and can be completed quickly, wherever you need it."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h2v2c0 1.44.68 2.61 1.88 3.78c.86.83 2.01 1.63 3.21 2.42l-1.83 1.19C8.27 10.72 7.31 10 6.5 9.21C5.07 7.82 4 6.1 4 4zm14 0h2v2c0 2.1-1.07 3.82-2.5 5.21c-1.41 1.38-3.21 2.52-4.96 3.63c-1.75 1.12-3.45 2.21-4.66 3.38C6.68 17.39 6 18.56 6 20v2H4v-2c0-2.1 1.07-3.82 2.5-5.21c1.41-1.38 3.21-2.52 4.96-3.63c1.75-1.12 3.45-2.21 4.66-3.38C17.32 6.61 18 5.44 18 4zm-3.26 10.61c.99.67 1.95 1.39 2.76 2.18C18.93 16.18 20 17.9 20 20v2h-2v-2c0-1.44-.68-2.61-1.88-3.78c-.86-.83-2.01-1.63-3.21-2.42zM7 3h10v1l-.06.5H7.06L7 4zm.68 3h8.64c-.24.34-.52.69-.9 1.06l-.51.44H9.07l-.49-.44c-.38-.37-.66-.72-.9-1.06m1.41 10.5h5.84l.49.44c.38.37.66.72.9 1.06H7.68c.24-.34.52-.69.9-1.06zm-2.03 3h9.88l.06.5v1H7v-1z"></path></svg>,
        title: "Immigration DNA Testing",
        price: "$499 - $699",
        description: "Immigration DNA Testing helps verify biological relationships for immigration applications, providing accurate and reliable results required by embassies and immigration authorities. Our mobile service brings the testing process to you, ensuring convenience and confidentiality throughout."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h2v2c0 1.44.68 2.61 1.88 3.78c.86.83 2.01 1.63 3.21 2.42l-1.83 1.19C8.27 10.72 7.31 10 6.5 9.21C5.07 7.82 4 6.1 4 4zm14 0h2v2c0 2.1-1.07 3.82-2.5 5.21c-1.41 1.38-3.21 2.52-4.96 3.63c-1.75 1.12-3.45 2.21-4.66 3.38C6.68 17.39 6 18.56 6 20v2H4v-2c0-2.1 1.07-3.82 2.5-5.21c1.41-1.38 3.21-2.52 4.96-3.63c1.75-1.12 3.45-2.21 4.66-3.38C17.32 6.61 18 5.44 18 4zm-3.26 10.61c.99.67 1.95 1.39 2.76 2.18C18.93 16.18 20 17.9 20 20v2h-2v-2c0-1.44-.68-2.61-1.88-3.78c-.86-.83-2.01-1.63-3.21-2.42zM7 3h10v1l-.06.5H7.06L7 4zm.68 3h8.64c-.24.34-.52.69-.9 1.06l-.51.44H9.07l-.49-.44c-.38-.37-.66-.72-.9-1.06m1.41 10.5h5.84l.49.44c.38.37.66.72.9 1.06H7.68c.24-.34.52-.69.9-1.06zm-2.03 3h9.88l.06.5v1H7v-1z"></path></svg>,
        title: "Ancestry and Heritage DNA Testing",
        price: "$79 - $299",
        description: "Our Ancestry and Heritage DNA Testing service helps you explore your roots and gain insight into your unique family heritage. With quick, convenient testing, we bring you closer to understanding your background and cultural connections."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h2v2c0 1.44.68 2.61 1.88 3.78c.86.83 2.01 1.63 3.21 2.42l-1.83 1.19C8.27 10.72 7.31 10 6.5 9.21C5.07 7.82 4 6.1 4 4zm14 0h2v2c0 2.1-1.07 3.82-2.5 5.21c-1.41 1.38-3.21 2.52-4.96 3.63c-1.75 1.12-3.45 2.21-4.66 3.38C6.68 17.39 6 18.56 6 20v2H4v-2c0-2.1 1.07-3.82 2.5-5.21c1.41-1.38 3.21-2.52 4.96-3.63c1.75-1.12 3.45-2.21 4.66-3.38C17.32 6.61 18 5.44 18 4zm-3.26 10.61c.99.67 1.95 1.39 2.76 2.18C18.93 16.18 20 17.9 20 20v2h-2v-2c0-1.44-.68-2.61-1.88-3.78c-.86-.83-2.01-1.63-3.21-2.42zM7 3h10v1l-.06.5H7.06L7 4zm.68 3h8.64c-.24.34-.52.69-.9 1.06l-.51.44H9.07l-.49-.44c-.38-.37-.66-.72-.9-1.06m1.41 10.5h5.84l.49.44c.38.37.66.72.9 1.06H7.68c.24-.34.52-.69.9-1.06zm-2.03 3h9.88l.06.5v1H7v-1z"></path></svg>,
        title: "Legal DNA Testing",
        price: "$349 - $499",
        description: "With Legal DNA Testing, the laboratory you work with will follow a strict chain of custody process to ensure accuracy. From specimen collection, to transportation to the laboratory, to the actual testing of the specimen, the collectors and lab workers will follow thorough documentation procedures. The collectors will also use tamper-proof cases and a secure courier service to transport the specimen to the lab"
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h2v2c0 1.44.68 2.61 1.88 3.78c.86.83 2.01 1.63 3.21 2.42l-1.83 1.19C8.27 10.72 7.31 10 6.5 9.21C5.07 7.82 4 6.1 4 4zm14 0h2v2c0 2.1-1.07 3.82-2.5 5.21c-1.41 1.38-3.21 2.52-4.96 3.63c-1.75 1.12-3.45 2.21-4.66 3.38C6.68 17.39 6 18.56 6 20v2H4v-2c0-2.1 1.07-3.82 2.5-5.21c1.41-1.38 3.21-2.52 4.96-3.63c1.75-1.12 3.45-2.21 4.66-3.38C17.32 6.61 18 5.44 18 4zm-3.26 10.61c.99.67 1.95 1.39 2.76 2.18C18.93 16.18 20 17.9 20 20v2h-2v-2c0-1.44-.68-2.61-1.88-3.78c-.86-.83-2.01-1.63-3.21-2.42zM7 3h10v1l-.06.5H7.06L7 4zm.68 3h8.64c-.24.34-.52.69-.9 1.06l-.51.44H9.07l-.49-.44c-.38-.37-.66-.72-.9-1.06m1.41 10.5h5.84l.49.44c.38.37.66.72.9 1.06H7.68c.24-.34.52-.69.9-1.06zm-2.03 3h9.88l.06.5v1H7v-1z"></path></svg>,
        title: "Non-Legal DNA Testing",
        price: "$299 - $349",
        description: "Non-Legal DNA Testing is affordable and confidential but is not admissible in court or legal situations. In a non-legal DNA test, no chain of custody exists because the parties being tested submit their samples themselves. There is no identification verification and the specimen is not transported in tamper-proof packaging. Thus, the results of the DNA test will not be admissible in court."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h2v2c0 1.44.68 2.61 1.88 3.78c.86.83 2.01 1.63 3.21 2.42l-1.83 1.19C8.27 10.72 7.31 10 6.5 9.21C5.07 7.82 4 6.1 4 4zm14 0h2v2c0 2.1-1.07 3.82-2.5 5.21c-1.41 1.38-3.21 2.52-4.96 3.63c-1.75 1.12-3.45 2.21-4.66 3.38C6.68 17.39 6 18.56 6 20v2H4v-2c0-2.1 1.07-3.82 2.5-5.21c1.41-1.38 3.21-2.52 4.96-3.63c1.75-1.12 3.45-2.21 4.66-3.38C17.32 6.61 18 5.44 18 4zm-3.26 10.61c.99.67 1.95 1.39 2.76 2.18C18.93 16.18 20 17.9 20 20v2h-2v-2c0-1.44-.68-2.61-1.88-3.78c-.86-.83-2.01-1.63-3.21-2.42zM7 3h10v1l-.06.5H7.06L7 4zm.68 3h8.64c-.24.34-.52.69-.9 1.06l-.51.44H9.07l-.49-.44c-.38-.37-.66-.72-.9-1.06m1.41 10.5h5.84l.49.44c.38.37.66.72.9 1.06H7.68c.24-.34.52-.69.9-1.06zm-2.03 3h9.88l.06.5v1H7v-1z"></path></svg>,
        title: "Non-Invasive Prenatal Paternity Test",
        price: "$1,399 - $1,499",
        description: "Essential DNA Testing offers Non-Invasive Prenatal Paternity Testing which determines paternity while the mother is at least 7-9 weeks pregnant, using a blood sample from the mother."
      }
    ]
  }

  return (
    <>
      <Header />
      <FindOut />
      <Proven />
      <Come />
      <Services services={myServices.services} />
      <Today />
      <ServiceArea />
    </>
  )
}
