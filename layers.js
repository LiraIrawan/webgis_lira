var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Padangadm_1 = new ol.format.GeoJSON();
var features_Padangadm_1 = format_Padangadm_1.readFeatures(json_Padangadm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padangadm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padangadm_1.addFeatures(features_Padangadm_1);
var lyr_Padangadm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Padangadm_1, 
                style: style_Padangadm_1,
                popuplayertitle: 'Padang adm',
                interactive: true,
    title: 'Padang adm<br />\
    <img src="styles/legend/Padangadm_1_0.png" /> 29251<br />\
    <img src="styles/legend/Padangadm_1_1.png" /> 43263<br />\
    <img src="styles/legend/Padangadm_1_2.png" /> 55564<br />\
    <img src="styles/legend/Padangadm_1_3.png" /> 59450<br />\
    <img src="styles/legend/Padangadm_1_4.png" /> 61665<br />\
    <img src="styles/legend/Padangadm_1_5.png" /> 62758<br />\
    <img src="styles/legend/Padangadm_1_6.png" /> 63886<br />\
    <img src="styles/legend/Padangadm_1_7.png" /> 78591<br />\
    <img src="styles/legend/Padangadm_1_8.png" /> 130410<br />\
    <img src="styles/legend/Padangadm_1_9.png" /> 155485<br />\
    <img src="styles/legend/Padangadm_1_10.png" /> 213854<br />\
    <img src="styles/legend/Padangadm_1_11.png" /> <br />' });
var format_sungaisig_2 = new ol.format.GeoJSON();
var features_sungaisig_2 = format_sungaisig_2.readFeatures(json_sungaisig_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaisig_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaisig_2.addFeatures(features_sungaisig_2);
var lyr_sungaisig_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaisig_2, 
                style: style_sungaisig_2,
                popuplayertitle: 'sungaisig',
                interactive: true,
                title: '<img src="styles/legend/sungaisig_2.png" /> sungaisig'
            });
var format_Buffered_3 = new ol.format.GeoJSON();
var features_Buffered_3 = format_Buffered_3.readFeatures(json_Buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_3.addFeatures(features_Buffered_3);
var lyr_Buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_3, 
                style: style_Buffered_3,
                popuplayertitle: 'Buffered',
                interactive: true,
                title: '<img src="styles/legend/Buffered_3.png" /> Buffered'
            });
var format_Clipped_4 = new ol.format.GeoJSON();
var features_Clipped_4 = format_Clipped_4.readFeatures(json_Clipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_4.addFeatures(features_Clipped_4);
var lyr_Clipped_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_4, 
                style: style_Clipped_4,
                popuplayertitle: 'Clipped',
                interactive: true,
                title: '<img src="styles/legend/Clipped_4.png" /> Clipped'
            });
var format_gis_osm_transport_free_1_5 = new ol.format.GeoJSON();
var features_gis_osm_transport_free_1_5 = format_gis_osm_transport_free_1_5.readFeatures(json_gis_osm_transport_free_1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gis_osm_transport_free_1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gis_osm_transport_free_1_5.addFeatures(features_gis_osm_transport_free_1_5);
var lyr_gis_osm_transport_free_1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gis_osm_transport_free_1_5, 
                style: style_gis_osm_transport_free_1_5,
                popuplayertitle: 'gis_osm_transport_free_1',
                interactive: true,
                title: '<img src="styles/legend/gis_osm_transport_free_1_5.png" /> gis_osm_transport_free_1'
            });
var format_DataBanjirKelompokPadangTimur_6 = new ol.format.GeoJSON();
var features_DataBanjirKelompokPadangTimur_6 = format_DataBanjirKelompokPadangTimur_6.readFeatures(json_DataBanjirKelompokPadangTimur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataBanjirKelompokPadangTimur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataBanjirKelompokPadangTimur_6.addFeatures(features_DataBanjirKelompokPadangTimur_6);
var lyr_DataBanjirKelompokPadangTimur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataBanjirKelompokPadangTimur_6, 
                style: style_DataBanjirKelompokPadangTimur_6,
                popuplayertitle: 'Data Banjir Kelompok — Padang Timur',
                interactive: true,
                title: 'Data Banjir Kelompok — Padang Timur'
            });
var format_DataBanjirKelompokPadangSelatan_7 = new ol.format.GeoJSON();
var features_DataBanjirKelompokPadangSelatan_7 = format_DataBanjirKelompokPadangSelatan_7.readFeatures(json_DataBanjirKelompokPadangSelatan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataBanjirKelompokPadangSelatan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataBanjirKelompokPadangSelatan_7.addFeatures(features_DataBanjirKelompokPadangSelatan_7);
var lyr_DataBanjirKelompokPadangSelatan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataBanjirKelompokPadangSelatan_7, 
                style: style_DataBanjirKelompokPadangSelatan_7,
                popuplayertitle: 'Data Banjir Kelompok — Padang Selatan',
                interactive: true,
                title: 'Data Banjir Kelompok — Padang Selatan'
            });
var format_DataBanjirKelompokNanggalo_8 = new ol.format.GeoJSON();
var features_DataBanjirKelompokNanggalo_8 = format_DataBanjirKelompokNanggalo_8.readFeatures(json_DataBanjirKelompokNanggalo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataBanjirKelompokNanggalo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataBanjirKelompokNanggalo_8.addFeatures(features_DataBanjirKelompokNanggalo_8);
var lyr_DataBanjirKelompokNanggalo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataBanjirKelompokNanggalo_8, 
                style: style_DataBanjirKelompokNanggalo_8,
                popuplayertitle: 'Data Banjir Kelompok — Nanggalo',
                interactive: true,
                title: 'Data Banjir Kelompok — Nanggalo'
            });
var format_DataBanjirKelompokLubukBegalung_9 = new ol.format.GeoJSON();
var features_DataBanjirKelompokLubukBegalung_9 = format_DataBanjirKelompokLubukBegalung_9.readFeatures(json_DataBanjirKelompokLubukBegalung_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataBanjirKelompokLubukBegalung_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataBanjirKelompokLubukBegalung_9.addFeatures(features_DataBanjirKelompokLubukBegalung_9);
var lyr_DataBanjirKelompokLubukBegalung_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataBanjirKelompokLubukBegalung_9, 
                style: style_DataBanjirKelompokLubukBegalung_9,
                popuplayertitle: 'Data Banjir Kelompok — Lubuk Begalung',
                interactive: true,
                title: 'Data Banjir Kelompok — Lubuk Begalung'
            });
var format_DataBanjirKelompokKuranji_10 = new ol.format.GeoJSON();
var features_DataBanjirKelompokKuranji_10 = format_DataBanjirKelompokKuranji_10.readFeatures(json_DataBanjirKelompokKuranji_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataBanjirKelompokKuranji_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataBanjirKelompokKuranji_10.addFeatures(features_DataBanjirKelompokKuranji_10);
var lyr_DataBanjirKelompokKuranji_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataBanjirKelompokKuranji_10, 
                style: style_DataBanjirKelompokKuranji_10,
                popuplayertitle: 'Data Banjir Kelompok — Kuranji',
                interactive: true,
                title: 'Data Banjir Kelompok — Kuranji'
            });
var format_DataBanjirKelompokKotoTangah_11 = new ol.format.GeoJSON();
var features_DataBanjirKelompokKotoTangah_11 = format_DataBanjirKelompokKotoTangah_11.readFeatures(json_DataBanjirKelompokKotoTangah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataBanjirKelompokKotoTangah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataBanjirKelompokKotoTangah_11.addFeatures(features_DataBanjirKelompokKotoTangah_11);
var lyr_DataBanjirKelompokKotoTangah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataBanjirKelompokKotoTangah_11, 
                style: style_DataBanjirKelompokKotoTangah_11,
                popuplayertitle: 'Data Banjir Kelompok — Koto Tangah',
                interactive: true,
                title: 'Data Banjir Kelompok — Koto Tangah'
            });
var format_tugassigtitikk_12 = new ol.format.GeoJSON();
var features_tugassigtitikk_12 = format_tugassigtitikk_12.readFeatures(json_tugassigtitikk_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tugassigtitikk_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tugassigtitikk_12.addFeatures(features_tugassigtitikk_12);
var lyr_tugassigtitikk_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tugassigtitikk_12, 
                style: style_tugassigtitikk_12,
                popuplayertitle: 'tugassigtitikk',
                interactive: true,
                title: '<img src="styles/legend/tugassigtitikk_12.png" /> tugassigtitikk'
            });
var format_gis_osm_traffic_free_1_13 = new ol.format.GeoJSON();
var features_gis_osm_traffic_free_1_13 = format_gis_osm_traffic_free_1_13.readFeatures(json_gis_osm_traffic_free_1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gis_osm_traffic_free_1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gis_osm_traffic_free_1_13.addFeatures(features_gis_osm_traffic_free_1_13);
var lyr_gis_osm_traffic_free_1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gis_osm_traffic_free_1_13, 
                style: style_gis_osm_traffic_free_1_13,
                popuplayertitle: 'gis_osm_traffic_free_1',
                interactive: true,
                title: '<img src="styles/legend/gis_osm_traffic_free_1_13.png" /> gis_osm_traffic_free_1'
            });
var format_gis_osm_pofw_free_1_14 = new ol.format.GeoJSON();
var features_gis_osm_pofw_free_1_14 = format_gis_osm_pofw_free_1_14.readFeatures(json_gis_osm_pofw_free_1_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gis_osm_pofw_free_1_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gis_osm_pofw_free_1_14.addFeatures(features_gis_osm_pofw_free_1_14);
var lyr_gis_osm_pofw_free_1_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gis_osm_pofw_free_1_14, 
                style: style_gis_osm_pofw_free_1_14,
                popuplayertitle: 'gis_osm_pofw_free_1',
                interactive: true,
                title: '<img src="styles/legend/gis_osm_pofw_free_1_14.png" /> gis_osm_pofw_free_1'
            });

        var lyr_Gmaps_15 = new ol.layer.Tile({
            'title': 'Gmaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqa1A0VFNPYjR6UGs2RGE3dzlwaUJra2tnT0pId3xBQ3Jtc0ttMzJtQWhkb0RlS01nRXoxQzgxMTI3SXpsX0pvbXBvM0pYT0NHdGFnckIzWnIwQk1BbE50Q0dpSllDbXNSMGdNOTJHRE01ajdjUWZrUUV6ZFpIRWVDcS0yYUZ0MGozeno0cDBtZDd0NVhIMG93alFLaw&q=https://mt1.google.com/vt/lyrs=m&x=%7Bx%7D&y=%7By%7D&z=%7Bz%7D'
            })
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Padangadm_1.setVisible(true);lyr_sungaisig_2.setVisible(true);lyr_Buffered_3.setVisible(true);lyr_Clipped_4.setVisible(true);lyr_gis_osm_transport_free_1_5.setVisible(true);lyr_DataBanjirKelompokPadangTimur_6.setVisible(true);lyr_DataBanjirKelompokPadangSelatan_7.setVisible(true);lyr_DataBanjirKelompokNanggalo_8.setVisible(true);lyr_DataBanjirKelompokLubukBegalung_9.setVisible(true);lyr_DataBanjirKelompokKuranji_10.setVisible(true);lyr_DataBanjirKelompokKotoTangah_11.setVisible(true);lyr_tugassigtitikk_12.setVisible(true);lyr_gis_osm_traffic_free_1_13.setVisible(true);lyr_gis_osm_pofw_free_1_14.setVisible(true);lyr_Gmaps_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Padangadm_1,lyr_sungaisig_2,lyr_Buffered_3,lyr_Clipped_4,lyr_gis_osm_transport_free_1_5,lyr_DataBanjirKelompokPadangTimur_6,lyr_DataBanjirKelompokPadangSelatan_7,lyr_DataBanjirKelompokNanggalo_8,lyr_DataBanjirKelompokLubukBegalung_9,lyr_DataBanjirKelompokKuranji_10,lyr_DataBanjirKelompokKotoTangah_11,lyr_tugassigtitikk_12,lyr_gis_osm_traffic_free_1_13,lyr_gis_osm_pofw_free_1_14,lyr_Gmaps_15];
lyr_Padangadm_1.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', 'pddk': 'pddk', });
lyr_sungaisig_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid': 'fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'adatgl': 'adatgl', 'dmax': 'dmax', 'fngair': 'fngair', 'jnssng': 'jnssng', 'klssng': 'klssng', 'ltksgi': 'ltksgi', 'namws': 'namws', 'status': 'status', 'ukrsgi': 'ukrsgi', 'wmax': 'wmax', 'dbtmxs': 'dbtmxs', 'namdas': 'namdas', 'shape_leng': 'shape_leng', });
lyr_Buffered_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid': 'fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'adatgl': 'adatgl', 'dmax': 'dmax', 'fngair': 'fngair', 'jnssng': 'jnssng', 'klssng': 'klssng', 'ltksgi': 'ltksgi', 'namws': 'namws', 'status': 'status', 'ukrsgi': 'ukrsgi', 'wmax': 'wmax', 'dbtmxs': 'dbtmxs', 'namdas': 'namdas', 'shape_leng': 'shape_leng', });
lyr_Clipped_4.set('fieldAliases', {'no': 'no', 'nama tempat': 'nama tempat', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_gis_osm_transport_free_1_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_DataBanjirKelompokPadangTimur_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DataBanjirKelompokPadangSelatan_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DataBanjirKelompokNanggalo_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DataBanjirKelompokLubukBegalung_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_DataBanjirKelompokKuranji_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DataBanjirKelompokKotoTangah_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_tugassigtitikk_12.set('fieldAliases', {'no': 'no', 'nama tempat': 'nama tempat', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_gis_osm_traffic_free_1_13.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_gis_osm_pofw_free_1_14.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Padangadm_1.set('fieldImages', {'Id': 'Range', 'kecamatan': 'TextEdit', 'pddk': 'TextEdit', });
lyr_sungaisig_2.set('fieldImages', {'ogc_fid': '', 'fid': '', 'objectid': '', 'namobj': '', 'fcode': '', 'remark': '', 'metadata': '', 'srs_id': '', 'adatgl': '', 'dmax': '', 'fngair': '', 'jnssng': '', 'klssng': '', 'ltksgi': '', 'namws': '', 'status': '', 'ukrsgi': '', 'wmax': '', 'dbtmxs': '', 'namdas': '', 'shape_leng': '', });
lyr_Buffered_3.set('fieldImages', {'ogc_fid': '', 'fid': '', 'objectid': '', 'namobj': '', 'fcode': '', 'remark': '', 'metadata': '', 'srs_id': '', 'adatgl': '', 'dmax': '', 'fngair': '', 'jnssng': '', 'klssng': '', 'ltksgi': '', 'namws': '', 'status': '', 'ukrsgi': '', 'wmax': '', 'dbtmxs': '', 'namdas': '', 'shape_leng': '', });
lyr_Clipped_4.set('fieldImages', {'no': '', 'nama tempat': '', 'longitude': '', 'latitude': '', });
lyr_gis_osm_transport_free_1_5.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_DataBanjirKelompokPadangTimur_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DataBanjirKelompokPadangSelatan_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DataBanjirKelompokNanggalo_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DataBanjirKelompokLubukBegalung_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_DataBanjirKelompokKuranji_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DataBanjirKelompokKotoTangah_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_tugassigtitikk_12.set('fieldImages', {'no': '', 'nama tempat': '', 'longitude': '', 'latitude': '', });
lyr_gis_osm_traffic_free_1_13.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_gis_osm_pofw_free_1_14.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_Padangadm_1.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'no label', 'pddk': 'no label', });
lyr_sungaisig_2.set('fieldLabels', {'ogc_fid': 'no label', 'fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'adatgl': 'no label', 'dmax': 'no label', 'fngair': 'no label', 'jnssng': 'no label', 'klssng': 'no label', 'ltksgi': 'no label', 'namws': 'no label', 'status': 'no label', 'ukrsgi': 'no label', 'wmax': 'no label', 'dbtmxs': 'no label', 'namdas': 'no label', 'shape_leng': 'no label', });
lyr_Buffered_3.set('fieldLabels', {'ogc_fid': 'no label', 'fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'adatgl': 'no label', 'dmax': 'no label', 'fngair': 'no label', 'jnssng': 'no label', 'klssng': 'no label', 'ltksgi': 'no label', 'namws': 'no label', 'status': 'no label', 'ukrsgi': 'no label', 'wmax': 'no label', 'dbtmxs': 'no label', 'namdas': 'no label', 'shape_leng': 'no label', });
lyr_Clipped_4.set('fieldLabels', {'no': 'no label', 'nama tempat': 'no label', 'longitude': 'no label', 'latitude': 'no label', });
lyr_gis_osm_transport_free_1_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_DataBanjirKelompokPadangTimur_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DataBanjirKelompokPadangSelatan_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DataBanjirKelompokNanggalo_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DataBanjirKelompokLubukBegalung_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_DataBanjirKelompokKuranji_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DataBanjirKelompokKotoTangah_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_tugassigtitikk_12.set('fieldLabels', {'no': 'no label', 'nama tempat': 'no label', 'longitude': 'no label', 'latitude': 'no label', });
lyr_gis_osm_traffic_free_1_13.set('fieldLabels', {'osm_id': 'header label - visible with data', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_gis_osm_pofw_free_1_14.set('fieldLabels', {'osm_id': 'header label - visible with data', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_gis_osm_pofw_free_1_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});