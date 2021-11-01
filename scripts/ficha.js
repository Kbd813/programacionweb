const fetcher = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
}

fetcher().then((data) => {
    const fileTemplate = document.getElementById('file-template').content;
    const activityTemplate = document.getElementById('activity-template').content;
    const filesContainer = document.getElementById('files-container');
    
    const fileCreator = (student) => {
        const clone = fileTemplate.cloneNode(true);
        clone.getElementById('name').textContent = student.nombre;
        clone.getElementById('github').href = student.github;
        clone.getElementById('neocities').href = student.neocites;
        clone.getElementById('email').href = student.email;
        clone.getElementById('whatsapp').href = student.telefono;
        clone.getElementById('image').src = student.foto;
        student.actividades.map((activity)=>
        {
            const cloneActivity = activityTemplate.cloneNode(true);
            cloneActivity.getElementById('activity-name').textContent = activity.actividad;
            cloneActivity.getElementById('uiux-state').textContent = activity.estadouiux;
            cloneActivity.getElementById('tech-state').textContent = activity.estadotecnico;
            clone.getElementById('activities-container').append(cloneActivity);
        })
        clone.getElementById('html-percentage').textContent = student.valoraciones['val-html'];
        clone.getElementById('css-percentage').textContent = student.valoraciones['val-css'];
        clone.getElementById('js-percentage').textContent = student.valoraciones['val-js'];
        clone.getElementById('ui-percentage').textContent = student.valoraciones['val-ui'];
        clone.getElementById('ux-percentage').textContent = student.valoraciones['val-ux'];
        clone.getElementById('rate').textContent = student.calificacion;
        filesContainer.append(clone);
    
    }
    
    data.estudiantes.map(fileCreator);
})
