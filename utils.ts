// src/utils/utils.ts

export function calculateAveragePriceByCourse(menu: Array<{ course: string, price: number }>) {
  const starters = menu.filter(item => item.course === 'starter');
  const mains = menu.filter(item => item.course === 'main');
  const desserts = menu.filter(item => item.course === 'dessert');

  const startersAvg = starters.length > 0 ? starters.reduce((sum, item) => sum + item.price, 0) / starters.length : 0;
  const mainsAvg = mains.length > 0 ? mains.reduce((sum, item) => sum + item.price, 0) / mains.length : 0;
  const dessertsAvg = desserts.length > 0 ? desserts.reduce((sum, item) => sum + item.price, 0) / desserts.length : 0;

  return {
    startersAvg,
    mainsAvg,
    dessertsAvg
  };
}

  