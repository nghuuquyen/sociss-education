```html
<%@ page import="java.util.Date"%>

<%!
public String getCurrentTime() {
  Date now = new Date();
  return now.toString();
}
%>

<html>
<body>
  <h2>Hello World!</h2>
  <h3>Current time is <%= getCurrentTime() %></h3>
  <p>This is first JSP page of me.</p>
</body>
</html>
```
