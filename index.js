const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((data) => {
    const splitStr = data.split(" ");
    const capitalizeData = splitStr.map((datas) => datas.charAt(0).toUpperCase() + datas.slice(1)
    );
    const response = capitalizeData.join(" ");
    return response;
  });
    
  };
  
    

    


  let newArr = [...seperatedData];

console.log(titleCased(tutorials))