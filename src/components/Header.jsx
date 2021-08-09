import React from 'react';
import "../assets/styles/components/Header.scss";
import logo3 from"../assets/static/LOGOisabella.png"
let estado= !1;
function verMenu(etiqueta){
    
        if (estado) {
    
            etiqueta.style.display="none";
        }
        else {
            etiqueta.style.display="flex";
        }
        estado = !estado 
}
const Header = () => (
    <header>
        <div className="logo">
            <img src={logo3} alt="logo isabella"/>
        </div>
        <div className="nav">
            <div className="iconoMenu" Onclick={()=>this.verMenu(nav)}>
                <svg height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Catalogos</a></li>
                    <li><a href="#">Premios</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
            <div className="barraIzquierda"></div>
                <a className="anuncio" href="#">* Trabaja con catalogo isabella *</a>
            <div className="barraDerecha"></div>
        </div>
        
        <div className="redesSociales">
            <div className="youtube">
                <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m224.113281 303.960938 83.273438-47.960938-83.273438-47.960938zm0 0"/><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm159.960938 256.261719s0 51.917969-6.585938 76.953125c-3.691406 13.703125-14.496094 24.507812-28.199219 28.195312-25.035156 6.589844-125.175781 6.589844-125.175781 6.589844s-99.878906 0-125.175781-6.851562c-13.703125-3.6875-24.507813-14.496094-28.199219-28.199219-6.589844-24.769531-6.589844-76.949219-6.589844-76.949219s0-51.914062 6.589844-76.949219c3.6875-13.703125 14.757812-24.773437 28.199219-28.460937 25.035156-6.589844 125.175781-6.589844 125.175781-6.589844s100.140625 0 125.175781 6.851562c13.703125 3.6875 24.507813 14.496094 28.199219 28.199219 6.851562 25.035157 6.585938 77.210938 6.585938 77.210938zm0 0"/>
                </svg>                 
            </div>
            <div className="facebook">
                <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z"/></svg>
            </div>
            <div className="instagra">
                <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0"/><path d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0"/><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0"/></svg>
            </div>
            <div className="whatsapp">
                <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm5.425781 405.050781c-.003906 0 .003907 0 0 0h-.0625c-25.644531-.011719-50.84375-6.441406-73.222656-18.644531l-81.222656 21.300781 21.738281-79.375c-13.410156-23.226562-20.464844-49.578125-20.453125-76.574219.035156-84.453124 68.769531-153.160156 153.222656-153.160156 40.984375.015625 79.457031 15.96875 108.382813 44.917969 28.929687 28.953125 44.851562 67.4375 44.835937 108.363281-.035156 84.457032-68.777343 153.171875-153.21875 153.171875zm0 0"/><path d="m261.476562 124.46875c-70.246093 0-127.375 57.105469-127.40625 127.300781-.007812 24.054688 6.726563 47.480469 19.472657 67.75l3.027343 4.816407-12.867187 46.980468 48.199219-12.640625 4.652344 2.757813c19.550781 11.601562 41.964843 17.738281 64.816406 17.746094h.050781c70.191406 0 127.320313-57.109376 127.351563-127.308594.011718-34.019532-13.222657-66.003906-37.265626-90.066406-24.042968-24.0625-56.019531-37.324219-90.03125-37.335938zm74.90625 182.035156c-3.191406 8.9375-18.484374 17.097656-25.839843 18.199219-6.597657.984375-14.941407 1.394531-24.113281-1.515625-5.5625-1.765625-12.691407-4.121094-21.828126-8.0625-38.402343-16.578125-63.484374-55.234375-65.398437-57.789062-1.914063-2.554688-15.632813-20.753907-15.632813-39.59375 0-18.835938 9.890626-28.097657 13.398438-31.925782 3.511719-3.832031 7.660156-4.789062 10.210938-4.789062 2.550781 0 5.105468.023437 7.335937.132812 2.351563.117188 5.507813-.894531 8.613281 6.570313 3.191406 7.664062 10.847656 26.5 11.804688 28.414062.957031 1.917969 1.59375 4.152344.320312 6.707031-1.277344 2.554688-5.519531 8.066407-9.570312 13.089844-1.699219 2.105469-3.914063 3.980469-1.679688 7.8125 2.230469 3.828125 9.917969 16.363282 21.296875 26.511719 14.625 13.039063 26.960938 17.078125 30.789063 18.996094 3.824218 1.914062 6.058594 1.59375 8.292968-.957031 2.230469-2.554688 9.570313-11.175782 12.121094-15.007813 2.550782-3.832031 5.105469-3.191406 8.613282-1.914063 3.511718 1.273438 22.332031 10.535157 26.160156 12.449219 3.828125 1.917969 6.378906 2.875 7.335937 4.472657.960938 1.597656.960938 9.257812-2.230469 18.199218zm0 0"/></svg>
            </div>
        </div>  
    </header>
);

export default Header;