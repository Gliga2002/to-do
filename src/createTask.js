export default function createTask(taskitems) {
  const id = Date.now();
  
  function setIsCompleted(status) {
    this.isCompleted = status
  }

  function setIsImportant(importantStatus) {
    this.isImportant = importantStatus
  }

  return {id,
    projectName:taskitems.projectName, 
    title:taskitems.title,
    details:taskitems.details,
    date:taskitems.date, 
    isCompleted:false,
    isImportant:false,
    setIsCompleted:setIsCompleted, setIsImportant:setIsImportant}
}