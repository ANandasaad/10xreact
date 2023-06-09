export const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];
  


  export const peoples = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];


  export const getImage=({imageId})=>{

    return('https://i.imgur.com/' +
    imageId +
    's.jpg')

  }


  export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];
  

  
   export const REST_API='https://jsonplaceholder.typicode.com/posts?_limit=10';


   export function createTodos(){
    const todos=[];
    for(let i=0;i<50;i++)
    {
      todos.push({id:i, text:'Todo'+(i+1),completed:Math.random()>0.5});
    }
    return todos;
   }
   
   export function fliterTodos(todos,tab)
   {
    console.log('Slowed Filtering'+todos.length+'todos for '+tab+'tab');
    let startTime=performance.now();
    while(performance.now()-startTime<5000)
    {
      //Do nothing
    }
    return todos.filter(todo=>{
      if(tab==='all')
      {
        return true;
      }
      else if(tab==='active')
      {
        return !todo.completed
      }
      else if(tab==='completed')
      {
        return todo.completed;
      }
    })
   };