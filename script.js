

let container = document.createElement('h1');

container.style.color = 'red';

container.style.textAlign = 'center';

container.style.marginTop = '100px';

document.body.append(container);


let sec = 10;

container.innerText = sec;

setTimeout(() => {

    container.innerText = sec--;
    
    setTimeout(() => {

        container.innerText = sec--;

        setTimeout(() => {

            container.innerText = sec--;
            
            setTimeout(() => {

                container.innerText = sec--;

                setTimeout(() => {

                    container.innerText = sec--;

                    setTimeout(() => {

                        container.innerText = sec--;

                        setTimeout(() => {

                            container.innerText = sec--;

                            setTimeout(() => {

                                container.innerText = sec--;

                                setTimeout(() => {

                                    container.innerText = sec--;

                                    setTimeout(() => {

                                        container.innerText = sec--;

                                        setTimeout(() => {

                                            container.innerText = "Happy Independence Day";
                                        
                                        }, 1000);
                                    
                                    }, 1000);
                                
                                }, 1000);
                            
                            }, 1000);
                        
                        }, 1000);
                    
                    }, 1000);
                
                }, 1000);
            
            }, 1000);
        
        }, 1000);

    
    }, 1000);

}, 1000);