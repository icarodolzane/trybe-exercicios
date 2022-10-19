const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const showSkills = (obj) =>{
    const skills = Object.keys(obj);
    const level = Object.values(obj);
    const array = [];
    for (let index = 0; index < Object.keys(obj).length; index+= 1) {
        array[index] = `${skills[index]}, Nível: ${level[index]}`;
    }

    return array;
  }

  console.log(showSkills(student1));
  console.log(showSkills(student2));