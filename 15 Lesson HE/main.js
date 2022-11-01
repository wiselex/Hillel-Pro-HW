'use strict'

class Tabs {
   static CLASS_BUTTON_ACTIVE = 'button-active';
   static CLASS_CONTENT_NONE = 'content-none';
   static CLASS_BLOCK_VISIBLE = 'block-visible';
   static CLASS_BUTTON_CONTAINER = 'button-container';
   static CLASS_CONTENT_LIST = 'content-list';
   static CLASS_DEFAULT_BTN = 'button';

   constructor(tabsEl) {
      this.tabsEl = tabsEl;
      this.curentTab = 0;

      this.addDefaultStyle();

      this.tabsEl.addEventListener('click', this.onTabsElClick.bind(this));

      this.getTabsElChild(0, this.curentTab).classList.add(Tabs.CLASS_BUTTON_ACTIVE);
      this.getTabsElChild(1, this.curentTab).classList.add(Tabs.CLASS_BLOCK_VISIBLE);
   }

   addDefaultStyle() {
      this.getDefaultChild(0).classList.add(Tabs.CLASS_BUTTON_CONTAINER);
      this.getDefaultChild(1).classList.add(Tabs.CLASS_CONTENT_LIST);
 
      const setDefaultClassBtn = this.getDefaultChild(0).children;
      const setDefaultClassContent = this.getDefaultChild(1).children;

      for (let i = 0; i < setDefaultClassBtn.length && i < setDefaultClassContent.length; i++) {
         setDefaultClassBtn[i].classList.add(Tabs.CLASS_DEFAULT_BTN);
         setDefaultClassContent[i].classList.add(Tabs.CLASS_CONTENT_NONE);
      }
   }

   onTabsElClick(e) {
      if (e.target.classList.contains(Tabs.CLASS_DEFAULT_BTN)) {

         if (this.isActEl()) {
            this.getTabsElChild(0, this.curentTab).classList.remove(Tabs.CLASS_BUTTON_ACTIVE);
            this.getTabsElChild(1, this.curentTab).classList.remove(Tabs.CLASS_BLOCK_VISIBLE);
         }
            
         this.setNewTab(e);

         this.getTabsElChild(1, this.curentTab).classList.add(Tabs.CLASS_BLOCK_VISIBLE);
      }
   }
   getTabsElChild(a, b){
      return this.tabsEl.children[a].children[b];
   }

   getDefaultChild(a){
      return this.tabsEl.children[a];
   }
   
   isActEl(){
      const currentBtn = document.querySelector('.' + Tabs.CLASS_BUTTON_ACTIVE);
      const currentContent = document.querySelector('.' + Tabs.CLASS_BLOCK_VISIBLE);
   
      return currentBtn && currentContent;
   }
   
   setNewTab(e){
      const arrBtn = this.getDefaultChild(0).children;
      const activeButton = e.target;
   
      for (let i = 0; i < arrBtn.length; i++) {
         if (arrBtn[i] === activeButton) {
            this.curentTab = i;
            activeButton.classList.add(Tabs.CLASS_BUTTON_ACTIVE);
         }
      }
   }
}
