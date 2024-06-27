---
layout: page
title: Projects
permalink: /projects/
---

<input type="text" id="searchBox" placeholder="Search projects...">
<select id="categoryFilter">
    <option value="all">All Categories</option>
    <option value="Pulseq interpreter">Pulseq interpreter</option>
    <option value="Sequence programming">Sequence programming</option>
    <option value="Image reconstruction">Image reconstruction</option>
</select>

<div id="projectList">
    <h3><u>Pulseq interpreters</u></h3>
    <div class="container">
        {% for project in site.data.projects %}
            {% if project.category contains "Pulseq interpreter" %}
                {% include project.html %}
            {% endif %}
        {% endfor %}
    </div>

    <h3><u>Pulse sequences and sequence development tools</u></h3>
    <div class="container">
        {% for project in site.data.projects %}
            {% if project.category contains "Sequence programming" %}
                {% include project.html %}
            {% endif %}
        {% endfor %}
    </div>

    <h3><u>Image reconstruction</u></h3>
    <div class="container">
        {% for project in site.data.projects %}
            {% if project.category contains "Image reconstruction" %}
                {% include project.html %}
            {% endif %}
        {% endfor %}
    </div>

</div>

<script src="/assets/js/search.js"></script>
