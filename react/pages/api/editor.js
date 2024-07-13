const data = {
  text: `<div>
<span style="font-size: 18px;">Quill Rich Text Editor</span>
</div>
<div>
<br>
</div>
<div>Quill is a free,
<a href="https://github.com/quilljs/quill/">open source</a>WYSIWYG editor built for the modern web. With its
<a href="http://quilljs.com/docs/modules/">extensible architecture</a>and a
<a href="http://quilljs.com/docs/api/">expressive API</a>you can completely customize it to fulfill your needs. Some built in features include:</div>
<div>
<br>
</div>
<ul>
<li>Fast and lightweight</li>
<li>Semantic markup</li>
<li>Standardized HTML between browsers</li>
<li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
</ul>
<div>
<br>
</div>
<div>
<span style="font-size: 18px;">Downloads</span>
</div>
<div>
<br>
</div>
<ul>
<li>
    <a href="https://quilljs.com">Quill.js</a>, the free, open source WYSIWYG editor</li>
<li>
    <a href="https://zenoamaro.github.io/react-quill">React-quill</a>, a React component that wraps Quill.js</li>
</ul>`
};

export default (req, res) => {
  setTimeout(() => {
    res.json(data);
  }, 2000);
};
