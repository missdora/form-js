/**
 * Version - 0.0.1
 * options : {}
 *   fields :
 *     [
 *       {
 *         label
 *         name
 *         type : select, radio, button, text, checkbox, submit
 *         value : str or array
 *       },
 *       ...
 *     ]
 *
 */

(function ($) {
  $.fn.extend({
    createForm : function (options) {
      var $main = $(this);
      if (!$main.length) {
        return;
      }
      if (!options || !options.fields) {
        return $main.html('An Empty Form');
      }

      $main.html(createFields(options.fields).join(''));
    }
  });


  function createFields(fields) {
    var html = [];
    html.push('<table>');
    for (var i = 0, l = fields.length; i < l; i++) {
      html.push(createSingleField(fields[i]));
    }
    html.push('</table>');

    return html;
  }

  function createSingleField(field) {
    var html = '<tr><td><label>' + (field.label || '') + ':</label></td><td>';
    switch (field.type) {
      case 'select' :
        html += createSelectField(field);
        break;
      case 'radio' :
      case  'checkbox' :
        html += createCheckboxOrRadioField(field);
        break;
      default :
        html += '<input type="' + field.type + '" value="' + (field.value || '') + '" class="' + field.name + '_' + field.type + '" name="' + field.name + '"/>';
    }
    html += '</td></tr>';
    return html;
  }

  /**
   * value = [
   *   {
   *     text
   *     index
   *     selected : true or false
   *   },
   *   ...
   *  ]
   */
  function createSelectField(field) {
    var html = [];
    var valArr = field.value;
    html.push('<select name="' + field.name + '" class="' + field.name + '_' + field.type + '">');
    for (var i = 0, l = valArr.length; i < l; i++) {
      var val = valArr[i];
      html.push('<option value="' + (val.index || i) + '" ' + (val.selected ? 'selected' : '') + '>' + val.text + '</option>');
    }
    html.push('</select>');

    return html.join('');
  }

  /**
   * value = [
   *   {
   *     text
   *     index
   *     checked : true or false
   *   },
   *   ...
   *  ]
   */
  function createCheckboxOrRadioField(field) {
    var html = [];
    var valArr = field.value;
    for (var i = 0, l = valArr.length; i < l; i++) {
      var val = valArr[i];
      html.push('<p><label><input type="' + field.type + '" class="' + field.name + '_' + field.type + '" name="' + field.name + '" value="' + (val.index || i) + '" ' + (val.checked ? 'checked' : '') +' /><span>' + val.text + '</span></label></p>');
    }
    return html.join('');
  }
})(jQuery);