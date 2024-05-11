async function goToHelpHTML(){
  window.location.href = '../subpages/help.html';
}

async function startHelp() {
  await includeHTML();
  policy.classList.remove("displaynone");
  policy.innerHTML = renderHelp("DE");
  //allNavButton(id);  
}

function renderHelp(lan) {
  switch (lan) {
    case "DE":
      return /*html*/ `

<div class="start-container">
   
    <div class ="policy">
             <div class="back-head"><h1 class="">Hilfe </h1><div id="backButton" onclick="goBack()"><img src="../assets/svg/back.svg" class="backarrow"></div>
    </div>

<p>Willkommen auf der Hilfeseite von <span class="highlighted">JOIN</span>, dein Leitfaden zur Verwendung unseres Kanban-Projektmanagement-Tools. Hier geben wir einen Überblick darüber, was <span class="highlighted">JOIN</span> ist, wie du es verwenden und davon profitieren kannst.
  </p>
  <h4 class="bold">
Was ist <span class="highlighted">JOIN</span>?</h4>
<p>
<span class="highlighted">JOIN</span> ist ein Kanban-basiertes Projektmanagement-Tool, das von einer Gruppe engagierter Studenten im Rahmen ihrer WebDeveloper-Weiterbildung an der Developer Akademie entworfen und entwickelt wurde.
  </p>
  <p>
Kanban, ein japanischer Begriff, der "Pinnwand" bedeutet, ist eine äußerst effektive Methode, um Arbeit zu visualisieren, laufende Arbeiten zu begrenzen und die Effizienz (oder den Fluss) zu maximieren. <span class="highlighted">JOIN</span> nutzt die Prinzipien von Kanban, um Benutzern zu helfen, ihre Aufgaben und Projekte in einer intuitiven, visuellen Benutzeroberfläche zu verwalten.
  </p>
  <p>
Es ist wichtig zu beachten, dass <span class="highlighted">JOIN</span> als Bildungsübung konzipiert ist und nicht für die umfangreiche geschäftliche Nutzung gedacht ist. Obwohl wir uns bemühen, die bestmögliche Benutzererfahrung zu gewährleisten, können wir keine Garantie für die ständige Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder andere Qualitätsaspekte von <span class="highlighted">JOIN</span> übernehmen.
  </p>
  <h4 class="bold">
Wie man es benutzt</h4>
<p>
Im Folgenden wird Schritt für Schritt erklärt, wie du <span class="highlighted">JOIN</span> verwendest:
<ol class="helplist">
<li><span class="bold">Erkunde die Plattform</span><br>
Wenn du dich bei <span class="highlighted">JOIN</span> anmeldest, findest du ein Standard-Board vor. Diese Tafel repräsentiert dein Projekt und enthält vier Standardlisten: "Todo", "In Progress", "Awaiting Feedback" und "Done".</li>
<li><span class="bold">Kontakte erstellen</span><br>
In <span class="highlighted">JOIN</span> kannst du Kontakte hinzufügen, um an deinen Projekten mitzuarbeiten. Gehe zum Abschnitt "Kontakte", klicke auf "Neuer Kontakt" und gib die erforderlichen Informationen ein. Nach dem Hinzufügen können diesen Kontakten Aufgaben zugewiesen werden und sie können mit den Aufgaben auf dem Board interagieren.
<li><span class="bold">
Hinzufügen von Karten</span><br>
Nachdem du nun deine Kontakte hinzugefügt hast, kannst du mit dem Hinzufügen von Karten beginnen. Karten stellen einzelne Aufgaben dar. Klicke auf die Schaltfläche "+" unter der entsprechenden Liste, um eine neue Karte zu erstellen. Trage die Aufgabendetails in die Karte ein, z. B. Aufgabenname, Beschreibung, Fälligkeitsdatum, Verantwortliche usw.</li>
<li><span class="bold">
Karten verschieben</span><br>
Wenn sich die Aufgabe von einer Phase zur nächsten verschiebt, kannst du dies auf der Tafel widerspiegeln, indem du die Karte von einer Liste in eine andere ziehst und dort ablegst.</li>
<li><span class="bold">
Löschen von Karten</span><br>
Sobald eine Aufgabe abgeschlossen ist, kannst du sie entweder in die Liste "Done" verschieben oder löschen. Wenn du eine Karte löschst, wird sie dauerhaft von der Tafel entfernt. Bitte sei also beim Löschen von Karten vorsichtig, da dieser Vorgang nicht rückgängig gemacht werden kann.</li>
  </ol>
  </p>
  <p>
Denk daran, dass die effektive Nutzung von <span class="highlighted">JOIN</span> regelmäßige Aktualisierungen von dir und deinem Team erfordert, um sicherzustellen, dass das Board den aktuellen Stand des Projekts widerspiegelt.
  </p>
  <p>
Haben du weitere Fragen zu <span class="highlighted">JOIN</span>? Kontaktiere uns unter [Ihre Kontakt-E-Mail]. Wir helfen dir gerne weiter!
  </p>
  
  <h4 class="bold">Viel Spaß mit <span class="highlighted">JOIN</span>!</h4>



    </div>

`;

    case "EN":
      return /*html*/ `
    
<h1>Help</h1>
<p>
Welcome to the help page for <span class="highlighted">JOIN</span>, your guide to using our kanban project management tool. Here, we'll provide an overview of what <span class="highlighted">JOIN</span> is, how it can benefit you, and how to use it.
  </p>

  <h4 class="bold">
What is <span class="highlighted">JOIN</span>?</h4>
<p>
<span class="highlighted">JOIN</span> is a kanban-based project management tool designed and built by a group of dedicated students as part of their web development bootcamp at the Developer Akademie.
  </p>
  <p>
Kanban, a Japanese term meaning "billboard", is a highly effective method to visualize work, limit work-in-progress, and maximize efficiency (or flow). <span class="highlighted">JOIN</span> leverages the principles of kanban to help users manage their tasks and projects in an intuitive, visual interface.
  </p>
  <p>
It is important to note that <span class="highlighted">JOIN</span> is designed as an educational exercise and is not intended for extensive business usage. While we strive to ensure the best possible user experience, we cannot guarantee consistent availability, reliability, accuracy, or other aspects of quality regarding <span class="highlighted">JOIN</span>.
  </p>
  <h4 class="bold">
How to use it</h4>
<p>
Here is a step-by-step guide on how to use <span class="highlighted">JOIN</span>:
<ol>
<li><span class="bold">Exploring the Board</span><br>
When you log in to <span class="highlighted">JOIN</span>, you'll find a default board. This board represents your project and contains four default lists: "To Do", "In Progress", “Await feedback” and "Done".</li>
<li><span class="bold">Creating Contacts</span><br>
In <span class="highlighted">JOIN</span>, you can add contacts to collaborate on your projects. Go to the "Contacts" section, click on "New contact", and fill in the required information. Once added, these contacts can be assigned tasks and they can interact with the tasks on the board.</li>
<li><span class="bold">Adding Cards</span><br>
Now that you've added your contacts, you can start adding cards. Cards represent individual tasks. Click the "+" button under the appropriate list to create a new card. Fill in the task details in the card, like task name, description, due date, assignees, etc.</li>
<li><span class="bold">Moving Cards</span><br>
As the task moves from one stage to another, you can reflect that on the board by dragging and dropping the card from one list to another.</li>
<li><span class="bold">Deleting Cards</span><br>
Once a task is completed, you can either move it to the "Done" list or delete it. Deleting a card will permanently remove it from the board. Please exercise caution when deleting cards, as this action is irreversible.</li>
  </ol>
  </p>
  <p>
Remember that using <span class="highlighted">JOIN</span> effectively requires consistent updates from you and your team to ensure the board reflects the current state of your project.
  </p>
  <p>
Have more questions about <span class="highlighted">JOIN</span>? Feel free to contact us at [Your Contact Email]. We're here to help you!
  </p>
<h4 class="bold">Enjoy using <span class="highlighted">JOIN</span>!</h4>


  </p>




    `;
  };
}
