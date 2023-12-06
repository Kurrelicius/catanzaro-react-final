import React, { useState,useEffect } from 'react';

const TaskList = () => {

    const [mostrarElemento, setMostrarElemento] = useState(false);

    const handleMostrarElemento = () => {
        setMostrarElemento(true);
    }
    const [isChecked, setIsChecked] = useState(false);
    const [primeraVezMarcado, setPrimeraVezMarcado] = useState(false);
  
    const handleCheckboxChange = () => {
      if (!primeraVezMarcado) {
        setPrimeraVezMarcado(true);
      }
      setIsChecked(true);
    };

    const [isChecked2, setIsChecked2] = useState(false);
    const [primeraVezMarcado2, setPrimeraVezMarcado2] = useState(false);
  
    const handleCheckboxChange2 = () => {
      if (!primeraVezMarcado2) {
        setPrimeraVezMarcado2(true);
      }
      setIsChecked2(true);
    };

    const [isChecked3, setIsChecked3] = useState(false);
    const [primeraVezMarcado3, setPrimeraVezMarcado3] = useState(false);
  
    const handleCheckboxChange3 = () => {
      if (!primeraVezMarcado3) {
        setPrimeraVezMarcado3(true);
      }
      setIsChecked3(true);
    };

    const [isChecked4, setIsChecked4] = useState(false);
    const [primeraVezMarcado4, setPrimeraVezMarcado4] = useState(false);
  
    const handleCheckboxChange4 = () => {
      if (!primeraVezMarcado4) {
        setPrimeraVezMarcado4(true);
      }
      setIsChecked4(true);
    };

    const [isChecked5, setIsChecked5] = useState(false);
    const [primeraVezMarcado5, setPrimeraVezMarcado5] = useState(false);
  
    const handleCheckboxChange5 = () => {
      if (!primeraVezMarcado5) {
        setPrimeraVezMarcado5(true);
      }
      setIsChecked5(true);
    };
  
    useEffect(() => {
        const handleEliminarUnoClick = () => {
        const taskListDiv = document.querySelector('.task--list');
            if (taskListDiv) {
            taskListDiv.remove();
        }
    };
    
    const eliminarUnoLink = document.getElementById('eliminarUno');
    if (eliminarUnoLink) {
      eliminarUnoLink.addEventListener('click', handleEliminarUnoClick);
    }

    return () => {
        if (eliminarUnoLink) {
          eliminarUnoLink.removeEventListener('click', handleEliminarUnoClick);
        }
      };
    }, []);
    
    useEffect(() => {
        const handleEliminarDosClick = () => {
          const taskListDiv = document.querySelector('.task--list__dos');
          if (taskListDiv) {
            taskListDiv.remove();
          }
        };
    
        const eliminarDosLink = document.getElementById('eliminar2');
        if (eliminarDosLink) {
          eliminarDosLink.addEventListener('click', handleEliminarDosClick);
        }
    
        return () => {
            
            if (eliminarDosLink) {
              eliminarDosLink.removeEventListener('click', handleEliminarDosClick);
            }
          };
        }, []); 

        useEffect(() => {
            const handleEliminarTresClick = () => {
              const taskListDiv = document.querySelector('.task--list__tres');
              if (taskListDiv) {
                taskListDiv.remove();
              }
            };
        
            const eliminarTresLink = document.getElementById('eliminar3');
            if (eliminarTresLink) {
              eliminarTresLink.addEventListener('click', handleEliminarTresClick);
            }
        
            return () => {
                
                if (eliminarTresLink) {
                  eliminarTresLink.removeEventListener('click', handleEliminarTresClick);
                }
              };
            }, []); 

            useEffect(() => {
                const handleEliminarCuatroClick = () => {
                  const taskListDiv = document.querySelector('.task--list__cuatro');
                  if (taskListDiv) {
                    taskListDiv.remove();
                  }
                };
            
                const eliminarCuatroLink = document.getElementById('eliminar4');
                if (eliminarCuatroLink) {
                  eliminarCuatroLink.addEventListener('click', handleEliminarCuatroClick);
                }
            
                return () => {
                    
                    if (eliminarCuatroLink) {
                      eliminarCuatroLink.removeEventListener('click', handleEliminarCuatroClick);
                    }
                  };
                }, []); 

                useEffect(() => {
                    const handleEliminarCincoClick = () => {
                      const taskListDiv = document.querySelector('.task--list__cinco');
                      if (taskListDiv) {
                        taskListDiv.remove();
                      }
                    };
                
                    const eliminarCincoLink = document.getElementById('eliminar5');
                    if (eliminarCincoLink) {
                      eliminarCincoLink.addEventListener('click', handleEliminarCincoClick);
                    }
                
                    return () => {
                        
                        if (eliminarCincoLink) {
                          eliminarCincoLink.removeEventListener('click', handleEliminarCincoClick);
                        }
                      };
                    }, []); 

                
                
    return (
        <div className='hero--container'>
            <div className="container--task--list">
                <form className='task--list__form'>
                    <div className="task--list">
                        <p className='description--task'>1) TIRAR LA BASURA</p>
                        <div className="checkComplete">
                            <a href='##' id='eliminarUno'>Eliminar</a>
                            <label htmlFor="completar">Completada</label>
                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} disabled={primeraVezMarcado && !isChecked}  id="completar"/>
                        </div>
                    </div>
    
                    <div className="task--list task--list__dos">
                        <p className='description--task'>2) REPARAR LA COMPUTADORA</p>
                        <div className="checkComplete"> 
                            <a href='##' id='eliminar2'>Eliminar</a>
                            <label htmlFor="completar2">Completada</label>
                            <input type="checkbox" checked={isChecked2} onChange={handleCheckboxChange2} disabled={primeraVezMarcado2 && !isChecked2} id="completar2"/>
                        </div>
                    </div>
                   
                    <div className="task--list task--list__tres">
                        <p className='description--task'>3) PASEAR AL PERRO</p>
                        <div className="checkComplete">
                            <a href='##' id='eliminar3'>Eliminar</a>
                            <label htmlFor="completar3">Completada</label>
                            <input type="checkbox" checked={isChecked3} onChange={handleCheckboxChange3} disabled={primeraVezMarcado3 && !isChecked3}id="completar3" />                    
                        </div>
                    </div>
         
                    <div className="task--list task--list__cuatro" style={{display: mostrarElemento ? 'flex' : 'none'}}>
                        <p className='description--task'>4) LEER "ATOMIC HABITS"</p>
                        <div className="checkComplete">
                            <a href='##' id='eliminar4'>Eliminar</a>
                            <label htmlFor="completar4">Completada</label>                     
                            <input type="checkbox" checked={isChecked4} onChange={handleCheckboxChange4} disabled={primeraVezMarcado4 && !isChecked4}id="completar4" />                           
                        </div>
                    </div>               
                    <div className="task--list task--list__cinco" style={{display: mostrarElemento ? 'flex' : 'none'}}>
                        <p className='description--task'>5) HACER EJERCICIO</p>
                        <div className="checkComplete">
                            <a href='##' id='eliminar5'>Eliminar</a>
                            <label htmlFor="completar5">Completada</label>
                            <input type="checkbox" checked={isChecked5} onChange={handleCheckboxChange5} disabled={primeraVezMarcado5 && !isChecked5}id="completar5" />                     
                        </div>
                    </div>

                    <button id='cta' onClick={handleMostrarElemento}>Mostrar Tareas Extras</button>
                </form>
            </div>
        </div>
      )
}
    

export default TaskList