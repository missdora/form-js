# form-js
rely on **jQuery**

version 0.0.1
## Overview
写个表单老是要写一堆HTML有么有
现在写一个简单的配置就可以输出啦
只做HTML输出 ，不绑定任何事件

Output form html by some simple config
No events on these html

### Supports
select, radio, checkbox, button, hidden, reset, submit, text

### Example

```
$('.form_div').createForm({
        fields : [
          {
            name : 'name',
            type : 'text',
            label : 'Name'
          },
          {
            name : 'gender',
            type : 'radio',
            label : 'Gender',
            value : [
              {
                text : 'Femal',
                index : 'f'
              },
              {
                text : 'Male',
                index : 'm'
              },
              {
                text : 'not Female either Male',
                index : 'z',
                checked : true
              }
            ]
          },
          {
            name : 'hobby',
            type : 'checkbox',
            label : 'Hobbies',
            value : [
              {
                text : 'reading',
                index : 'r',
                checked : true
              },
              {
                text : 'dancing',
                index : 'd'
              }
            ]
          },
          {
            name : 'city',
            type : 'select',
            label : 'City',
            value : [
              {
                text : 'Hangzhou'
              },
              {
                text : 'Zhoushan'
              },
              {
                text : 'Taiwan',
                selected : true
              }
            ]
          }
        ]
      });
```
then you'll see
```
<table>
  <tbody>
    <tr><td><label>Name:</label></td><td><input type="text" value="" class="name_text" name="name"></td></tr>
    <tr><td><label>Gender:</label></td><td><p><label><input type="radio" class="gender_radio" name="gender" value="f"><span>Femal</span></label></p><p><label><input type="radio" class="gender_radio" name="gender" value="m"><span>Male</span></label></p><p><label><input type="radio" class="gender_radio" name="gender" value="z" checked=""><span>not Female either Male</span></label></p></td></tr>
    <tr><td><label>Hobbies:</label></td><td><p><label><input type="checkbox" class="hobby_checkbox" name="hobby" value="r" checked=""><span>reading</span></label></p><p><label><input type="checkbox" class="hobby_checkbox" name="hobby" value="d"><span>dancing</span></label></p></td></tr>
    <tr><td><label>City:</label></td><td><select name="city" class="city_select"><option value="0">Hangzhou</option><option value="1">Zhoushan</option><option value="2" selected="">Taiwan</option></select></td></tr>
  </tbody>
</table>
```