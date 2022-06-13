import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  private component: { [key: string]: any } = {}

  /**
   * 注册动态组件
   * @param component
   */
  registerComponent(component: any[] | any) {
    if (Array.isArray(component)) {
      component.forEach((item) => {
        this.component[item.name] = item.component;
      })
    } else {
      this.component[component.name] = component;
    }
  }

  /**
   * 获取组件
   * @param key 组件的key
   */
  getComponent(key: string | any) {
    if (typeof key === 'object') {
      return key
    }
    return this.component[key] || null
  }
}
