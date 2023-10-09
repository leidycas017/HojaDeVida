
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardPortafolio } from './CardPortafolio';
import { Slide } from '@mui/material';
import { Settings } from '@mui/icons-material';

const data = [
    {img: "/images/app1.jpg", title:"Películas Review - Fullstack", 
    descripcion:"Aplicación web para hacer review de películas utilizando MongoDb para la base de datos, Java con Spring Boot para el backend y React para el frontend.",
    videoId:"P_57jLr2GgE"},
    {img: "/images/productos.jpg", title:"App ventas - Fullstack", 
    descripcion:"Análisis, diseño y desarrollo de un sistema de ventas con autenticación utilizando jwt, angular en el frontend, java con spring boot en el backend y MySQL para la base de datos.",
    videoId:"P_57jLr2GgE"},
    {img: "/images/agenda.jpg", title:"Agenda de contactos - Fullstack", 
    descripcion:"Aplicación de escritorio, elaborada con Java, JavaFX y Scene Builder donde el usuario puede ingresar su email y password para realizar el CRUD de su datos.",
    videoId:"P_57jLr2GgE"},
    {img: "/images/perfil.jpg", title:"Evaluación del perfil de riesgo", 
    descripcion:"Creación de un sistema para evaluar el perfil de un inversionista, usando thymeleaf en el frontend, java con spring boot y MySQL para la base de datos.",
    videoId:"P_57jLr2GgE"},
    {img: "/images/calculadora.jpg", title:"Desarrollo Frontend", 
    descripcion:"Set de aplicaciones creadas con angular para practicar el databinding, directivas, componentes, routeo, servicios y formularios, desplegados en Netlify.",
    videoId:"P_57jLr2GgE"},
]


interface PortafolioProps {
    name: string;
}

const Portafolio = ({ name }: PortafolioProps) => {
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (

        <section className="flex flex-col gap-5 p-2" id="portafolio">
            <div className="flex justify-center mt-5">
                <span className="text-black text-2xl font-bold ">{name}</span>
            </div>
            <div className="flex justify-center">
                <span className="text-black">Algunos de mis trabajos realizados, en la universidad, cursos y en el diplomado OIT.</span>
            </div>
            <Slider {...settings} >
               {data.map((el,index) => <CardPortafolio key={index} image={el.img} title={el.title} description={el.descripcion} videoId={el.videoId}/>)}
            </Slider>

            </section>





        

    )

}

export { Portafolio }