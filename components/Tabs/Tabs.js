/* <== STRETCH WORK ==> */
class Tabs {
  constructor(className) {
    this.tabs = document.querySelectorAll(`${className}`);
    this.tabList = [];
    this.tabs.forEach((tab) => {
      this.tabList.push(new TabLink(tab));
      if (tab.classList.contains('tabs-link-selected'))
        this.currentSelection = tab.dataset.tab;
    });
    document.body.addEventListener('click', (event) => this.select(event));
  }

  select(event) {
    if (event.target.classList.contains('tabs-link')) {
      if (event.target.dataset.tab !== this.currentSelection) {
        this.tabList[this.currentSelection - 1].deselect();
        this.currentSelection = event.target.dataset.tab;
        this.tabList[this.currentSelection - 1].select();
      }
    }
  }
}

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab = '${this.data}']`,
    );
    this.tabItem = new TabItem(this.itemElement);
  }

  select() {
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }

  deselect() {
    this.element.classList.remove('tabs-link-selected');
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    this.element.classList.remove('tabs-item-selected');
  }
}

tabs = new Tabs('.tabs-link');

/* MVP ITEMS BELOW */
/* class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab = '${this.data}']`,
    );
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => this.select());
  }

  select() {
    const links = document.querySelectorAll('.tabs-link');
    Array.from(links).forEach((link) =>
      link.classList.remove('tabs-link-selected'),
    );
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
} */

/* class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item');
    Array.from(items).forEach((item) =>
      item.classList.remove('tabs-item-selected'),
    );
    this.element.classList.add('tabs-item-selected');
  }
} */

// links = document.querySelectorAll('.tabs-link').forEach((link) => new TabLink(link));
