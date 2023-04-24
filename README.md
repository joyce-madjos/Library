# Library

Background Photo by Ivo Rainha from Pexels: https://www.pexels.com/photo/assorted-books-on-shelf-1290141/

.modal {
  /* display: none; */
  /* max-width: -1px; */
  /* height: 100%; */
  /* margin: 0 auto; */
  /* left: 500px; */
  /* top: 0; */
  position: absolute;
  background-color: var(--licorice);
  color: black;
  overflow: auto;
  z-index: 1;
  padding: 1rem;
  display: grid;
  grid-template-columns: 2fr 5fr;
  /* min-height: 100svh; */
  max-width:max(100%, 50vw) ; 
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  padding:2rem ;
  border-radius: 1rem;
  border: 1px solid #888;
  cursor: context-menu;
  margin-top: 40%;
  /* margin: 10rem auto 5rem; */
  /* max-width: 100%; */
}