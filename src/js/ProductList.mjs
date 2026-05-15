
export default class ProductList {
  constructor(dataSource) {
    this.dataSource = dataSource;
    this.products = [];
  }

  async init() {
    this.products = await this.dataSource.getData();
    console.log(this.products); // check if data loaded
    this.render();
  }

  render() {
    console.log("Rendering products...");
    console.table(this.products);
  }
}