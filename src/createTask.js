export default function createTask(taskitems) {
  const id = Date.now();
  
  function toggleIsCompleted() {
    this.isCompleted = this.isCompleted ? false : true;

    console.log(this);

    return this.isCompleted;
  }

  function toggleIsImportant() {
    this.isImportant = this.isImportant ? false : true;

    console.log(this);

    return this.isImportant;
  }

  return {id,
    projectName:taskitems.projectName, 
    title:taskitems.title,
    details:taskitems.details,
    date:taskitems.date, 
    isCompleted:false,
    isImportant:false,
    setIsCompleted:toggleIsCompleted, setIsImportant:toggleIsImportant}
}