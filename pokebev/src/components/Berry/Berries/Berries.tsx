import  {useEffect, useState} from 'react'
import Berry from '../Berry'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Berries.module.css';


function Berries() {


  //berries
  const [berries, setBerries] = useState<any>([]);


  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch('https://pokeapi.co/api/v2/berry?limit=8000')
    .then((response) => response.json()) //espera a resposta
    .then((data) => setBerries(data.results)); //espera o json ficar pronto
  }, []);


  return (
    
    <div className="justify-content-center">
      <h1>Berries</h1>
      <div className={styles.BerriesList}>
        {
          berries.length > 0 && berries.map((berry: any) => <Berry name={berry.name} />) //se a primeira for falsa, para.
        }
      </div>

    
    </div>
    
  )
}

export default Berries; 