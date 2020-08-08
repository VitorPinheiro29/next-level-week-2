export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number); //transformar para o tipo numérico (Number)
  const timeInMinutes = (hour * 60) + (minutes);
  return timeInMinutes;
}
