# wasm-demo

> 项目起源于这篇文章: https://juejin.cn/post/7345423755948785718

修改`hello_wasm.js`中的`addHeapObject`函数，替换`Location`对象：
```diff
function addHeapObject(obj) {
+    // 替换掉location
+    if (obj instanceof Location) {
+        obj = {
+            "origin": "https://leemotive.github.io",
+        }
+    }

    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}
```
