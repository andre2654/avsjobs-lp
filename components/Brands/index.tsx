import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "UTFPR",
    href: "https://www.utfpr.edu.br",
    image: "/images/brands/utfpr.svg",
  },
  {
    id: 2,
    name: "Grupo Itamarathy",
    href: "https://www.grupoitamarathy.com.br",
    image: "/images/brands/itamarathy.png",
  },
  {
    id: 3,
    name: "UTFPR",
    href: "https://www.utfpr.edu.br",
    image: "/images/brands/utfpr.svg",
  },
  {
    id: 4,
    name: "UTFPR",
    href: "https://www.utfpr.edu.br",
    image: "/images/brands/utfpr.svg",
  },
  {
    id: 5,
    name: "UTFPR",
    href: "https://www.utfpr.edu.br",
    image: "/images/brands/utfpr.svg",
  },
];

const Brands = () => {
  return (
    <section className="pt-16 w-full">
      <div className="w-full">
        <div className="flex flex-wrap w-full">
          <div
            className="w-full wow fadeInUp flex flex-wrap items-center justify-center bg-black p-6 dark:bg-primary dark:bg-opacity-5"
            data-wow-delay=".1s
            "
          >
            {brandsData.map((brand) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
          </div>
      </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
