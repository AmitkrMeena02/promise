function getButter(){
    return new Promise ((resolve, reject) => {
        console.log(`husband gets Butter`)
        resolve(`Butter`);
    })
  }
  
  function getColdDrinks(){
    return new Promise ((resolve, reject) => {
        console.log(`husband gets Cold Drinks`)
        resolve(`Cold Drink`);
    })
  }
  
  //Promsie
  getButter()
    .then((butter) => {
      return getColdDrinks();
    })
    .then((coldDrinks) => {
      console.log(`Husband got butter and cold drinks using Promises.`);
    })
    .catch((error) => console.log(`Error:`, error));
    
  //async.await
  async function get(){
    try {
      const butter = await getButter();
      const coldDrinks = await getColdDrinks();
      console.log(`Husband got butter and cold drinks using using async/await.`)
    } catch(error) {
      console.log(`Error:`, error)
    }
  };
  
  get();