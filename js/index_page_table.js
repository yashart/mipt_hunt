function print_working_table()
{
    document.getElementById('table_type').innerHTML='';
    $('#table_type').append('<thead> <tr> <th>Требуемые скиллы</th> <th>Описание работы</th> <th>Сроки</th> <th>Кафедра</th> </tr> </thead> <tbody><tr><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>2</td><td>2</td><td>2</td><td>2</td></tr><tr><td>3</td><td>3</td><td>3</td><td>3</td></tr></tbody>');
}

function print_student_rate_table()
{
    document.getElementById('table_type').innerHTML='';
    $('#table_type').append('<thead> <tr> <th>Имя студента</th> <th>Скиллы</th> <th>Оценка</th> <th>Факультет</th> </tr></thead> <tbody> <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr> <tr> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr><tr><td>3</td><td>3</td><td>3</td><td>3</td></tr></tbody>');

}