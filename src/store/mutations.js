export default {
  changeCity (state, city) {
    state.city = city
    try { localStorage.city = city } catch (e) { }
  }
}
// 执行数据变更
