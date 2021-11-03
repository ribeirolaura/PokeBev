import React, {useEffect, useState} from 'react';

import BerryImage from '../BerryImage/BerryImage';

import ModalBerry from '../ModalBerry/ModalBerry';

import {Button, Card} from  'react-bootstrap';
import {Data, BerryData} from '../Models/interfaces';
import * as styles from './Berry.module.css';
// import './Berry.css';



function Berry  ({name}: {name:string})  {

   const [berries, setBerry] = useState<Data | undefined>(undefined);
   const [modalShow, setModalShow] = useState(false);
   

  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch(`https://pokeapi.co/api/v2/berry/${name}`)
    .then((response) => response.json()) //espera a resposta
    .then((data)=> setBerry(data)); //espera o json ficar pronto
  }, []);

  
 if(!berries){
   //Resposta enquanto não temos a informação
  return (
  
    <div className={styles.default.Berry} data-testid="Berry">
      {name}
           
      carregando berries...

    </div>
  )
  } else{ 
    //Resposta quando temos a informação
    
  return (
      <Card className={styles.default.card1}>
        <BerryImage name={berries.item.name} url={berries.item.url} />

        <Card.Body>
          <Card.Text>
          {berries.name.toUpperCase()}
          </Card.Text>

          <Button className={styles.default.btnPrimary1} variant="primary" onClick={() => setModalShow(true)}>
            Informações
          </Button>

          <ModalBerry
            detalhes={berries}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
       
  ) 
  }
}

export default Berry;