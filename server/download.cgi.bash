#!/bin/bash
echo "Content-type: text/plain"
echo "Content-Disposition: attachment; filename="'"'$QUERY_STRING'"'
echo
curl "https://raw.githubusercontent.com/b1conrad/browser-agent/master/$QUERY_STRING"
